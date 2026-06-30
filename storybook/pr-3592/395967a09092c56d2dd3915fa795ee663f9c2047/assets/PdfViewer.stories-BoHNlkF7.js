import{R as i,O as M,j as y,M as v}from"./iframe-gFssGAf1.js";import{P as D}from"./pdf-viewer-BX6PJPNU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Bcdw7yQy.js";import"./preload-helper-y4wIX-uA.js";import"./PdfRenderer-CbxapZ61.js";import"./index-COwGmWRi.js";import"./PdfViewer-_z6mABHw.js";import"./PdfViewer.module.css-KBNEnOnm.js";import"./PdfViewerAnnotationLayer-BPYrjJWA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-rRQOZwra.js";import"./PdfViewerOutlineSidebar-DgEcGJIp.js";import"./PdfViewerSidebarHeader-uH62-a8B.js";import"./useBaseUiId-Bx8pun8U.js";import"./useControlled-BCGuXS9q.js";import"./CompositeRoot-CgpvMW_G.js";import"./CompositeItem-DOPE1RS9.js";import"./ToolbarRootContext-u2KtsOkQ.js";import"./composite-Cgx9KCH4.js";import"./svgIconContainer-CZvKaYWH.js";import"./PdfViewerSearchBar-DWP0RWp8.js";import"./chevron-up-CKQY7sz8.js";import"./chevron-down-BATQ0KTh.js";import"./cross-BBQyPZCp.js";import"./PdfViewerSidebar-NIElbFQU.js";import"./index-RGxUsOMu.js";import"./index-CyQZA97-.js";import"./index-Dtml0nDn.js";import"./PdfViewerToolbar-BLc5Tjfc.js";import"./Button-COT62_yZ.js";import"./chevron-right-Ccr8FOak.js";import"./Input-CSpvgbGy.js";import"./minus-fkrgKl-t.js";import"./search-CVTe4_QC.js";import"./spin-DmF-vA12.js";import"./error-XSVHXQDH.js";import"./withOsdkMetrics-DMjiHC0K.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
