import{j as r,M as s}from"./iframe-DjTsTlya.js";import{P as p}from"./pdf-viewer-Bmv1zrFW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cc9RtcUb.js";import"./preload-helper-DOwvcOZH.js";import"./PdfViewer-g_ZMtALR.js";import"./index-CRTtk6ac.js";import"./BasePdfViewer-CW8hwGY2.js";import"./BasePdfViewer.module.css-CBt6CvDh.js";import"./PdfViewerAnnotationLayer-Ce2dfTtD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRdVSWpu.js";import"./PdfViewerOutlineSidebar-BeMWuRBN.js";import"./PdfViewerSidebarHeader-BVRNOLKV.js";import"./useBaseUiId-BzNc-3Ql.js";import"./useControlled-BVHEmv7i.js";import"./CompositeRoot-BGq7MJ-d.js";import"./CompositeItem-BuvWaDdm.js";import"./ToolbarRootContext-DfW4g7RO.js";import"./composite-0nzRqKiC.js";import"./svgIconContainer-xPgA_yJ1.js";import"./PdfViewerSearchBar-Dv-QAd_R.js";import"./chevron-up-BDD-Ihiy.js";import"./chevron-down-Crh_WC6g.js";import"./cross-Cvq5D40f.js";import"./PdfViewerSidebar-CkeCJspi.js";import"./index-C3payG2R.js";import"./index-y5c47ww6.js";import"./index-DqxuM6At.js";import"./PdfViewerToolbar-DUAwMLtJ.js";import"./Button-DyYtieLu.js";import"./chevron-right-Dg_j8dGP.js";import"./Input-D8ax6gQv.js";import"./search-Bt_OBQnD.js";import"./spin-gpAKVIds.js";import"./error-DgpTog1A.js";import"./withOsdkMetrics-BW3QL-zG.js";import"./makeExternalStore-Dm9B4aPC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
