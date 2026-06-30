import{R as i,O as M,j as y,M as v}from"./iframe-B0-tfh-c.js";import{P as D}from"./pdf-viewer-D4D67ETt.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CoNXTWCW.js";import"./preload-helper-C4hPIoyS.js";import"./PdfRenderer-BDaKrFYr.js";import"./index-o6pOtgsT.js";import"./PdfViewer-BMnTxZFv.js";import"./PdfViewer.module.css-Daof0q0B.js";import"./PdfViewerAnnotationLayer-BciDV7OK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3NrGPv6.js";import"./PdfViewerOutlineSidebar-KDaaIxnm.js";import"./PdfViewerSidebarHeader-1fctId2M.js";import"./useBaseUiId-DDUM07aX.js";import"./useControlled-CG0ODf7u.js";import"./CompositeRoot-Ij_3Se0n.js";import"./CompositeItem-QSA7DLWZ.js";import"./ToolbarRootContext-r7uc7AQy.js";import"./composite-CRiuV0VN.js";import"./svgIconContainer-C4aEhaYY.js";import"./PdfViewerSearchBar-D9RuQDFU.js";import"./chevron-up-DNb5v_nt.js";import"./chevron-down-BISz4od6.js";import"./cross-CFyLhWV7.js";import"./PdfViewerSidebar-UJS-pPUW.js";import"./index-BR6Ge-EQ.js";import"./index-ClBRmNFr.js";import"./index-ofPqUom8.js";import"./PdfViewerToolbar-BGZG86KC.js";import"./Button-K8sSc9Ht.js";import"./chevron-right-Cm2LLEPA.js";import"./Input-CI58F6cK.js";import"./minus-CwuL6HIZ.js";import"./search-BjuITscC.js";import"./spin-CaXnzS0N.js";import"./error-uUmuq0xV.js";import"./withOsdkMetrics-DEML7v4G.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
