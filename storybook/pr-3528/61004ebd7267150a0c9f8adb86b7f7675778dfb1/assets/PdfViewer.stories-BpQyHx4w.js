import{R as i,O as M,j as y,M as v}from"./iframe-DU6AifTB.js";import{P as D}from"./pdf-viewer-B1kFDhJ8.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-D55TZi2h.js";import"./preload-helper-C9r7Mq-J.js";import"./PdfRenderer-VqyXGaB3.js";import"./index-BDDtmXmH.js";import"./PdfViewer-CJ9RUw5w.js";import"./PdfViewer.module.css-CB5eNoSD.js";import"./PdfViewerAnnotationLayer-Bul_7JUZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BSjE0HF1.js";import"./PdfViewerOutlineSidebar-C1me8_In.js";import"./PdfViewerSidebarHeader-D_QNaxUe.js";import"./useBaseUiId-KEqBcONz.js";import"./useControlled-C9IdqnIb.js";import"./CompositeRoot-DjaIswwq.js";import"./CompositeItem-DvPShEFw.js";import"./ToolbarRootContext-B9_dyxli.js";import"./composite-BUEF30mt.js";import"./svgIconContainer-CE7iH6vv.js";import"./PdfViewerSearchBar-z456yy4o.js";import"./chevron-up-CGc_GiL5.js";import"./chevron-down-D_7VX1CI.js";import"./cross-W5LBmGNL.js";import"./PdfViewerSidebar-lAQ0C9Yl.js";import"./index-BhGYIy1H.js";import"./index-BVCAhqLI.js";import"./index-CbGov4bv.js";import"./PdfViewerToolbar-L7ewMZ3p.js";import"./Button-D3E7joIa.js";import"./chevron-right-Kng8vHe9.js";import"./Input-DeaC_9xA.js";import"./minus-CZITBZ58.js";import"./search-DsFx-0Lb.js";import"./spin-ORjMAoo-.js";import"./error-DxvBCM2J.js";import"./withOsdkMetrics-CdAtkSMD.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
