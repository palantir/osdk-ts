import{R as i,O as M,j as y,M as v}from"./iframe-EgW55rp1.js";import{P as D}from"./pdf-viewer-BOTHzslC.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CjuMZ-T0.js";import"./preload-helper-BJBqx_ZF.js";import"./PdfRenderer-BgunI9KN.js";import"./index-ofy4ekvw.js";import"./PdfViewer-CR1eEyQ2.js";import"./PdfViewer.module.css-mv26uANL.js";import"./PdfViewerAnnotationLayer-DQBTTY2o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgnP7agP.js";import"./PdfViewerOutlineSidebar-CC28JEZ7.js";import"./PdfViewerSidebarHeader-ahT8C106.js";import"./useBaseUiId-CxI2lHal.js";import"./useControlled-CYO8LWR7.js";import"./CompositeRoot-CuciRI0N.js";import"./CompositeItem-Cv2wWPiy.js";import"./ToolbarRootContext-DWHOqxKc.js";import"./composite-qJIbPHXf.js";import"./svgIconContainer-BFynvZcF.js";import"./PdfViewerSearchBar-B6imILJf.js";import"./chevron-up-B7JqxzCm.js";import"./chevron-down-D5AR2wJO.js";import"./cross-s_B_m8xI.js";import"./PdfViewerSidebar-CFcGxjBb.js";import"./index-DxV-gI_1.js";import"./index-TCBaztB2.js";import"./index-CLw44H1U.js";import"./PdfViewerToolbar-D8DTP_z2.js";import"./Button-DiEdXENR.js";import"./chevron-right-4N5t0-R2.js";import"./Input-453DtfgB.js";import"./minus-Bn9isfsH.js";import"./search-Cq7EIF7n.js";import"./spin-CbM6cKwh.js";import"./error-B4NQhp3w.js";import"./withOsdkMetrics-D4-WB5Yi.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
