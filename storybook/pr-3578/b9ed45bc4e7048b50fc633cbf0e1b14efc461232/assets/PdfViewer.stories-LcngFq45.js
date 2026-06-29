import{R as i,O as M,j as y,M as v}from"./iframe-pGfIdeQc.js";import{P as D}from"./pdf-viewer-RJ3RJYH9.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-kADLtrD4.js";import"./preload-helper-CfacRwlT.js";import"./PdfRenderer-EQDR4CKz.js";import"./index-CStqrya9.js";import"./PdfViewer-CFSTNila.js";import"./PdfViewer.module.css-CgsMcKcm.js";import"./PdfViewerAnnotationLayer-A_qtvxoD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cxt2U4Er.js";import"./PdfViewerOutlineSidebar-Cd56lVB1.js";import"./PdfViewerSidebarHeader-ClHRqMt5.js";import"./useBaseUiId-Badx_cLW.js";import"./useControlled-PagK95Rv.js";import"./CompositeRoot-D_JfXOU4.js";import"./CompositeItem-CtOetl_o.js";import"./ToolbarRootContext-D4zIBKav.js";import"./composite-CtokHJrB.js";import"./svgIconContainer-BJ58DwaZ.js";import"./PdfViewerSearchBar-d28PKUtL.js";import"./chevron-up-BSzLaXs6.js";import"./chevron-down-CK2TsFli.js";import"./cross-n7I6WPV2.js";import"./PdfViewerSidebar-DU8oFnAi.js";import"./index-CdDft0m1.js";import"./index-RE0gqYn2.js";import"./index-CHA9YxKQ.js";import"./PdfViewerToolbar-sUOZ265G.js";import"./Button-DoGnhWiU.js";import"./chevron-right-DLM79KQQ.js";import"./Input-8V8uS3j5.js";import"./minus-sTaE8AEC.js";import"./search-AfopOu5Z.js";import"./spin-BzJyl5Sl.js";import"./error-DcgEoChb.js";import"./withOsdkMetrics-LTIE-KQO.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
