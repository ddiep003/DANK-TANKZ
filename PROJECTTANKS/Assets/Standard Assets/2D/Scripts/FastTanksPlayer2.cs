using UnityEngine;
using System.Collections;

public class FastTanksPlayer2 : MonoBehaviour {

    // Use this for initialization
    public float TankHP = 1;
    public float maxSpeed = 10;  //public variable for movement speed.
    public Transform tankGraphics;    //variable to represent the "graphics" child object in the editor.
    bool grounded = false;       //bool to check if the sprite is touching the ground.
    public Transform groundCheck;//variable to assign an empty object used for checking the ground. 
    public float fuel;
    public float jumpforce = 30;
    public float bulletPower = 0;
    public float maxbulletpower;
    public GameObject bullet;
    float basespeed;
    public Transform firepoint;
    public LayerMask whatisGround; //Layer settings to adjust which objects in which layers are considered ground.
    void Start()
    {
        //tankGraphics = tankGraphics.transform.FindChild("Tank");
        bulletPower = 0;
        basespeed = bullet.GetComponent<FireBullet>().bulletspeeds;
    }

    // Update is called once per frame
    void Update()
    {

        if ((fuel > 0) && Input.GetKey(KeyCode.UpArrow))
        {
            GetComponent<Rigidbody2D>().AddForce(new Vector2(0, jumpforce));

            fuel--;
        }

        if (Input.GetKeyDown(KeyCode.Keypad0))
        {
            FireBullet();
        }



    }

    void FixedUpdate()
    {
        float move = Input.GetAxis("Horizontal2");// Variable used to store the movement double when moving horizontally.

        GetComponent<Rigidbody2D>().velocity = new Vector2(move * maxSpeed, GetComponent<Rigidbody2D>().velocity.y);
    }

    void FireBullet()
    {
        Instantiate(bullet, firepoint.position, firepoint.rotation);
    }
    public void DamageTank()
    {
        TankHP -= 999999;
        if (TankHP <= 0)
        {
            Destroy(this.gameObject);
        }

    }
    void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.tag == "Bullet")
        {
            DamageTank();
        }
    }
}
