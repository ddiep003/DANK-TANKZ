using UnityEngine;
using System.Collections;

public class Player2GunRot : MonoBehaviour {

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.Keypad4))

            transform.Rotate(Vector3.forward);

        if (Input.GetKey(KeyCode.Keypad6))

            transform.Rotate(Vector3.back);


    }
}
