import{R as i,O as M,j as y,M as v}from"./iframe-Cs9ADBvD.js";import{P as D}from"./pdf-viewer-hCOhtbUc.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DqH_udeO.js";import"./preload-helper-fp8RqZsU.js";import"./PdfRenderer-BvZfZbSW.js";import"./index-BZvVFqB_.js";import"./PdfViewer-Brk-_Fnh.js";import"./PdfViewer.module.css-Bty8PrZx.js";import"./PdfViewerAnnotationLayer-DNCEmMKY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vRVy1r_i.js";import"./PdfViewerOutlineSidebar-DiPqyujy.js";import"./PdfViewerSidebarHeader-DFka8V5V.js";import"./useBaseUiId-fO_qfTxo.js";import"./useControlled-CN6pV-iU.js";import"./CompositeRoot-C2U84lgp.js";import"./CompositeItem-BQPjEBfp.js";import"./ToolbarRootContext-tZHFCkP2.js";import"./composite-DRqzyhfc.js";import"./svgIconContainer-CS8ujTgu.js";import"./PdfViewerSearchBar-CeNCyLZ2.js";import"./chevron-up-C5EJxK-d.js";import"./chevron-down-DvUAHv_E.js";import"./cross-DxeY-V2I.js";import"./PdfViewerSidebar-BzxToNvQ.js";import"./index-DsLecxgw.js";import"./index-CwiHwblg.js";import"./index-Dg3zvo-k.js";import"./PdfViewerToolbar-B7G9eR1a.js";import"./Button-DqsJRI1g.js";import"./chevron-right-D54BzOFG.js";import"./Input-DscsSbrZ.js";import"./minus-DnAtc9J2.js";import"./spin-DO8Pd0as.js";import"./error-BWgFwG0e.js";import"./withOsdkMetrics-B8hZUnEJ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
