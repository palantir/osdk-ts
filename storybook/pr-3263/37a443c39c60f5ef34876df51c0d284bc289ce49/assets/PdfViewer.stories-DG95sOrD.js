import{R as i,O as M,j as y,M as v}from"./iframe-xswAJePX.js";import{P as D}from"./pdf-viewer-BAIkZjzP.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Daju7tCG.js";import"./preload-helper-BKHMy5CR.js";import"./PdfRenderer-bv2Gsf65.js";import"./index-DAjMsKJb.js";import"./PdfViewer-mU5hsKoT.js";import"./PdfViewer.module.css-D4Sqr1LB.js";import"./PdfViewerAnnotationLayer-vUqdlcpJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XU0Nryf1.js";import"./PdfViewerOutlineSidebar-h9WR6Pxs.js";import"./PdfViewerSidebarHeader-BtR1zUb9.js";import"./useBaseUiId-DY2za2CZ.js";import"./useControlled-FLzszgGx.js";import"./CompositeRoot-BO_R4O_l.js";import"./CompositeItem-DpvT_5oZ.js";import"./ToolbarRootContext-BtFMR77E.js";import"./composite-DG_A6kuR.js";import"./svgIconContainer-CQT9RbU9.js";import"./PdfViewerSearchBar-BbySocS3.js";import"./chevron-up-CgZrRLlj.js";import"./chevron-down-Zqm0lJTT.js";import"./cross-CIe7vil1.js";import"./PdfViewerSidebar-FUi64HMW.js";import"./index-BrZErRHI.js";import"./index-Ctl8Fu8W.js";import"./index-BeM6-y7H.js";import"./PdfViewerToolbar-Br51ayzD.js";import"./Button-CLXxvZVY.js";import"./chevron-right-Dng_D-6E.js";import"./Input-DK-tkflJ.js";import"./minus-CU2-42CY.js";import"./spin-DLn2bYXL.js";import"./error-DaoyZik_.js";import"./withOsdkMetrics-DTxzja4K.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
