import{R as i,O as M,j as y,M as v}from"./iframe-pvq-vF4J.js";import{P as D}from"./pdf-viewer-Ds0vzlw0.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BNt_0vQH.js";import"./preload-helper-DFsU4bK8.js";import"./PdfRenderer-BSc-uHwa.js";import"./index-eCbMZ3Ul.js";import"./PdfViewer-DeHSRQiL.js";import"./PdfViewer.module.css-zl921DQh.js";import"./PdfViewerAnnotationLayer-BiOiGyK3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8abY8zm6.js";import"./PdfViewerOutlineSidebar-CLE1k2Ay.js";import"./PdfViewerSidebarHeader-xCpaRheS.js";import"./useBaseUiId-D_Zi5uO4.js";import"./useControlled-irIHLVOH.js";import"./CompositeRoot-Bm9UdRBv.js";import"./CompositeItem-Gaw4LcDL.js";import"./ToolbarRootContext-BmnO0RL7.js";import"./composite-CPbkNe6Q.js";import"./svgIconContainer-DoKzqDPY.js";import"./PdfViewerSearchBar-v0Bl5-AH.js";import"./chevron-up-DqcNxOzL.js";import"./chevron-down-CvdKNIIA.js";import"./cross-CUOCPzVL.js";import"./PdfViewerSidebar--MMSdsUI.js";import"./index-CRdVZ8y8.js";import"./index-DN-yE6uB.js";import"./index-C8dY89Xh.js";import"./PdfViewerToolbar-IKPjvG7A.js";import"./Button-Bo-ewfGH.js";import"./chevron-right-BxtM6HVF.js";import"./Input-CuEV0MJp.js";import"./minus-DLEzAQaW.js";import"./search-DQbqmV51.js";import"./spin-B2ZaZEBG.js";import"./error-DTZtkkYh.js";import"./withOsdkMetrics-CJfzwdaO.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
