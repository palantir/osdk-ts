import{j as r,M as s}from"./iframe-CAlFL39P.js";import{P as p}from"./pdf-viewer-E96yWtM0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSkL1uCv.js";import"./preload-helper-Di8UnZgY.js";import"./PdfViewer-BbpnJmn9.js";import"./index-Btel0vm8.js";import"./BasePdfViewer-C1bRGJkf.js";import"./BasePdfViewer.module.css-BtwZ3tyk.js";import"./PdfViewerAnnotationLayer-DuXtu3YG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FIpnXy1C.js";import"./PdfViewerOutlineSidebar-CmqujXO2.js";import"./PdfViewerSidebarHeader-B7oH4Rjp.js";import"./useBaseUiId-DZP7PN-D.js";import"./useControlled-CagAHQp0.js";import"./CompositeRoot-meFPhZU1.js";import"./CompositeItem-BD07_lL8.js";import"./ToolbarRootContext-NYYVBOfJ.js";import"./composite-Do6HvbOs.js";import"./svgIconContainer-B3bjsS48.js";import"./PdfViewerSearchBar-Bvc_xrrw.js";import"./chevron-up-BOo88cIL.js";import"./chevron-down-C4L1Vt1n.js";import"./cross-C-7oEPIv.js";import"./PdfViewerSidebar-Dn0JL2g8.js";import"./index-DlRk9Ig6.js";import"./index-CFlCfQcw.js";import"./index-BkqKFdv7.js";import"./PdfViewerToolbar-cAt8mu1J.js";import"./Button-C360afnZ.js";import"./chevron-right-CUo_pJ2c.js";import"./Input-BBwNdl2L.js";import"./search-B49Txj1R.js";import"./spin-C3MHl-Jx.js";import"./error-DNzjg8ag.js";import"./withOsdkMetrics-D_LiGSK5.js";import"./makeExternalStore-H3EygE5L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
