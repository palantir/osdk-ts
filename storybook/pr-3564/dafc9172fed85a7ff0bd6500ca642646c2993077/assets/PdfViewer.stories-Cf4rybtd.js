import{R as i,O as M,j as y,M as v}from"./iframe-V6i4bT8x.js";import{P as D}from"./pdf-viewer-B3YU6zwz.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DESvwURl.js";import"./preload-helper-CmldX7sB.js";import"./PdfRenderer-BdTzwEvM.js";import"./index-Beds6yTA.js";import"./PdfViewer-C81H9U3o.js";import"./PdfViewer.module.css-QRyoSAcP.js";import"./PdfViewerAnnotationLayer-Crz8wSaN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_NyRUgM.js";import"./PdfViewerOutlineSidebar-BTBMLlIM.js";import"./PdfViewerSidebarHeader-CNYzi1gG.js";import"./useBaseUiId-Bj0YWIgW.js";import"./useControlled-BlAInmFY.js";import"./CompositeRoot-CVgRnEHo.js";import"./CompositeItem-CABo2SFk.js";import"./ToolbarRootContext-KVPUKj7I.js";import"./composite-CKYi_Tru.js";import"./svgIconContainer-aK674JUy.js";import"./PdfViewerSearchBar-C9khGW6P.js";import"./chevron-up-1eVHhPLs.js";import"./chevron-down-CclV5GtX.js";import"./cross-DDT71ccu.js";import"./PdfViewerSidebar-BC3vEx73.js";import"./index-BAspgGrR.js";import"./index-CveQVLJL.js";import"./index-BWb5Ixk2.js";import"./PdfViewerToolbar-Dp9ElQ2B.js";import"./Button-D0ll5qNd.js";import"./chevron-right-uBrcI1Iu.js";import"./Input-Cx-yIF6Y.js";import"./minus-BKBavqvO.js";import"./spin-BhnRyj0P.js";import"./error-i_as8ABS.js";import"./withOsdkMetrics-DgdhCmRn.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
