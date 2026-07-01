import{R as i,O as M,j as y,M as v}from"./iframe-D0ucOuid.js";import{P as D}from"./pdf-viewer-C4Eh-ZOq.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-c_SqPNLS.js";import"./preload-helper-Dbago4K3.js";import"./PdfRenderer-DYNLusXi.js";import"./index-COXB08R9.js";import"./PdfViewer-CBJLnynV.js";import"./PdfViewer.module.css-Cw1x8Ebv.js";import"./PdfViewerAnnotationLayer-D0TTewbB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-4VgVRr.js";import"./PdfViewerOutlineSidebar-BWvR5htK.js";import"./PdfViewerSidebarHeader-DcIkM6VR.js";import"./useBaseUiId-CMuGOdMh.js";import"./useControlled-DoXK2GrK.js";import"./CompositeRoot-Dmc31cfw.js";import"./CompositeItem-ByQnfEiz.js";import"./ToolbarRootContext-Cv8r3D5y.js";import"./composite-Dg0n5z7n.js";import"./svgIconContainer-A7aIUps5.js";import"./PdfViewerSearchBar-QessRkCD.js";import"./chevron-up-CAhnrXbK.js";import"./chevron-down-DfkRu7ka.js";import"./cross-wHe_kbci.js";import"./PdfViewerSidebar-BEDOAgpr.js";import"./index-DfZ4053_.js";import"./index-BeNrEhUO.js";import"./index-D4KPHE31.js";import"./PdfViewerToolbar-ClHByShN.js";import"./Button-DHAxKs9e.js";import"./chevron-right-CJpxG8dL.js";import"./Input-B-v7pt1U.js";import"./minus-OtKL2JR0.js";import"./search-D5fdEY4D.js";import"./spin-CiUVN1AH.js";import"./error-D7ovlyVk.js";import"./withOsdkMetrics-BljmcISJ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
