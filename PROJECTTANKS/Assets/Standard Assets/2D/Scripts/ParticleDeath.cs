using UnityEngine;
using System.Collections;

public class ParticleDeath : MonoBehaviour {

    public float lifetime = 1;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        lifetime -= Time.deltaTime;
        if (lifetime <=0)
        {
            Destroy(gameObject);
        }
	}
}
