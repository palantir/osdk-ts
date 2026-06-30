import{R as i,O as M,j as y,M as v}from"./iframe-DLyQaqpF.js";import{P as D}from"./pdf-viewer-C9kzjLLa.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B3q1dpq0.js";import"./preload-helper-C-e9bxMY.js";import"./PdfRenderer-DEoUgTqK.js";import"./index-7upvneg1.js";import"./PdfViewer-Tk4VzQ9G.js";import"./PdfViewer.module.css-C_invKvv.js";import"./PdfViewerAnnotationLayer-eGJ7zxUi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwBirWxa.js";import"./PdfViewerOutlineSidebar-CVUefhS3.js";import"./PdfViewerSidebarHeader-WGFqiu8N.js";import"./useBaseUiId-UuMgtbSi.js";import"./useControlled-ZIKIXp5D.js";import"./CompositeRoot-CqHfq_Ld.js";import"./CompositeItem-7PPYSQCL.js";import"./ToolbarRootContext-B2nN4Zah.js";import"./composite-CA2Ka0zc.js";import"./svgIconContainer-DWDDdKTE.js";import"./PdfViewerSearchBar-ac9I9Zd1.js";import"./chevron-up-F_iAM3sq.js";import"./chevron-down-CkglZp0i.js";import"./cross-D2gbBT1d.js";import"./PdfViewerSidebar-j3xa42GZ.js";import"./index-DRPFHYZj.js";import"./index-BqCwBdPB.js";import"./index-B9IWF8Og.js";import"./PdfViewerToolbar-Dql3yPIZ.js";import"./Button-BQRCdod0.js";import"./chevron-right-ZkUBoUZV.js";import"./Input-DIP4Tvvh.js";import"./minus-Baj_-Rxs.js";import"./search-CQt5paG8.js";import"./spin-D9KvlucF.js";import"./error-DX7nP_6B.js";import"./withOsdkMetrics-CMPmtg6O.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
