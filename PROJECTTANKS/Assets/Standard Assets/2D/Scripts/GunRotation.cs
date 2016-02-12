using UnityEngine;
using System.Collections;

public class GunRotation : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKey("e"))

            transform.Rotate(Vector3.forward);

        if (Input.GetKey("q"))

            transform.Rotate(Vector3.back);


    }
    void RotateLeft()
    {
        transform.Rotate(Vector3.forward);
    }
    void RotateRight()
    {
        transform.Rotate(Vector3.back);
    }
}
