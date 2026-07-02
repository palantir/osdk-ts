import{R as i,O as M,j as y,M as v}from"./iframe-BPsbnD3-.js";import{P as D}from"./pdf-viewer-BCleKtLw.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BmDTcobO.js";import"./preload-helper-nbiNUvbx.js";import"./PdfRenderer-BtdukFix.js";import"./index-CD8jiNvU.js";import"./PdfViewer-C6Xw4eNe.js";import"./PdfViewer.module.css-BjPzpZpq.js";import"./PdfViewerAnnotationLayer-D2sudGgl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bb5uxn2X.js";import"./PdfViewerOutlineSidebar-CNJBmpmW.js";import"./PdfViewerSidebarHeader-BD-OZhld.js";import"./useBaseUiId-fUCbvsGh.js";import"./useControlled-DhNXpMdh.js";import"./CompositeRoot-D6zZl8t8.js";import"./CompositeItem-B7C3K7dX.js";import"./ToolbarRootContext-BCEMFmSA.js";import"./composite-Mqyb2C8L.js";import"./svgIconContainer-BBd09OkQ.js";import"./PdfViewerSearchBar-D6O8wi1l.js";import"./chevron-up-B9OU0b1f.js";import"./chevron-down-Xtiggqfh.js";import"./cross-D9Aoewgl.js";import"./PdfViewerSidebar-Bi1ytjdf.js";import"./index-D00QMlk8.js";import"./index-DWrzAG7S.js";import"./index-Ca2a8vQi.js";import"./PdfViewerToolbar-Rqtj7Rf0.js";import"./Button-BiX0xWqG.js";import"./chevron-right-CrQUL_da.js";import"./Input-C6HzFSjr.js";import"./minus-BSSZSYKZ.js";import"./search-U7graBFs.js";import"./spin-Dt-Kjf-k.js";import"./error-CnqjcJdt.js";import"./withOsdkMetrics-DRE8__de.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
