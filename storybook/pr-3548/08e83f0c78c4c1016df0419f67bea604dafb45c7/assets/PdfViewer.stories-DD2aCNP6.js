import{R as i,O as M,j as y,M as v}from"./iframe-83F8flfy.js";import{P as D}from"./pdf-viewer-hcCSqcvC.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-tIcgo_v2.js";import"./preload-helper-B_s0NEdB.js";import"./PdfRenderer-Cra_OZRr.js";import"./index-DfkZKDju.js";import"./PdfViewer-BiR3W00b.js";import"./PdfViewer.module.css-CiaidEQx.js";import"./PdfViewerAnnotationLayer-EaEI8CPl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DyUjlLft.js";import"./PdfViewerOutlineSidebar-CKGdpycg.js";import"./PdfViewerSidebarHeader-DicAX1Rr.js";import"./useBaseUiId-9G_Jb_68.js";import"./useControlled-BFnd4CoS.js";import"./CompositeRoot-Di5QP6fD.js";import"./CompositeItem-ALHHMHbO.js";import"./ToolbarRootContext-BsBzW-qT.js";import"./composite-BuuHAsAY.js";import"./svgIconContainer-DIKDfch6.js";import"./PdfViewerSearchBar-CYTN4Zv6.js";import"./chevron-up-DoEh9kpM.js";import"./chevron-down-C5IkZ22r.js";import"./cross-DXerdfS4.js";import"./PdfViewerSidebar-Bjz1AwyS.js";import"./index-C12wJsS5.js";import"./index-DKygYrjw.js";import"./index-ZIuRylts.js";import"./PdfViewerToolbar-CacJDHrM.js";import"./Button-BsrKZpMb.js";import"./chevron-right-U_Osveel.js";import"./Input-DEEiLvzF.js";import"./minus-B2Z1geiR.js";import"./spin-BrTr8MXg.js";import"./error-DQEmY2MR.js";import"./withOsdkMetrics-VwwOgy9O.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
