import{R as i,O as M,j as y,M as v}from"./iframe-D0cQ1eSr.js";import{P as D}from"./pdf-viewer-CMlclZ5u.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-C3TBwPQp.js";import"./preload-helper-8p1ODNIo.js";import"./PdfRenderer-CoTrgJQa.js";import"./index-BdPIEzYw.js";import"./PdfViewer-YDaBWCCD.js";import"./PdfViewer.module.css-BnwlqUD5.js";import"./PdfViewerAnnotationLayer-DDnN8zkf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DeaqxUH_.js";import"./PdfViewerOutlineSidebar-BYmqQWGJ.js";import"./PdfViewerSidebarHeader-rB9Ixed8.js";import"./useBaseUiId-C7tJIDCt.js";import"./useControlled-CdPWtduu.js";import"./CompositeRoot-DWR4_Tma.js";import"./CompositeItem-CcFW3oCd.js";import"./ToolbarRootContext-ByWYeUkS.js";import"./composite-uDxssXD9.js";import"./svgIconContainer-Dgml8VCW.js";import"./PdfViewerSearchBar-VvaYO-7V.js";import"./chevron-up-BKObAcyd.js";import"./chevron-down-B8r9vnNM.js";import"./cross-C3ZUVARE.js";import"./PdfViewerSidebar-J2rvRq2Q.js";import"./index-BglnIyNL.js";import"./index-DQ00X8fb.js";import"./index-C-OmQGL8.js";import"./PdfViewerToolbar-BfPWbQYl.js";import"./Button-DxZ4MDs1.js";import"./chevron-right-CqChbft1.js";import"./Input-B1SOPRep.js";import"./minus-C_8-_ghW.js";import"./search-B7w-MVhD.js";import"./spin-BoJS2jel.js";import"./error-dknaGxzi.js";import"./withOsdkMetrics-Cd32WcJG.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
