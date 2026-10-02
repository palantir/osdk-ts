import{j as r,M as s}from"./iframe-DO7dF-ar.js";import{P as p}from"./pdf-viewer-CvoAVzUj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DtNNGGfv.js";import"./preload-helper-BW5WH-mc.js";import"./PdfViewer-DZkjx3F-.js";import"./index-kenPv2GE.js";import"./BasePdfViewer-DMHv5_8m.js";import"./BasePdfViewer.module.css-DRiv-wav.js";import"./PdfViewerAnnotationLayer-BLzVA28s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRxRlTjq.js";import"./PdfViewerOutlineSidebar-DuLZ95Jn.js";import"./PdfViewerSidebarHeader-B9XPgtSM.js";import"./useBaseUiId-Bt-nl6bS.js";import"./useControlled-6UP7zcXc.js";import"./CompositeRoot-BaakZJv5.js";import"./CompositeItem-BwVsaSQK.js";import"./ToolbarRootContext-CZAMPnmu.js";import"./composite-DP63OVsA.js";import"./svgIconContainer-DjMCTipa.js";import"./PdfViewerSearchBar-0wVc1_kw.js";import"./chevron-up-4kQ7rw_l.js";import"./chevron-down-C1ai5XRC.js";import"./cross-C1UL2-2h.js";import"./PdfViewerSidebar-Dtmuy-0M.js";import"./index-CoQO0q6S.js";import"./index-ChtT1bsq.js";import"./index-DTtqbecA.js";import"./PdfViewerToolbar-D5dgAH4J.js";import"./Button-CizE_ePi.js";import"./chevron-right-D04s-5Lb.js";import"./Input-CK_329wL.js";import"./search-BLUkB-J4.js";import"./spin-BvuR2gFg.js";import"./error-D0RjPgCd.js";import"./withOsdkMetrics-Btt-8vLh.js";import"./makeExternalStore-Am-Ru7Ep.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
