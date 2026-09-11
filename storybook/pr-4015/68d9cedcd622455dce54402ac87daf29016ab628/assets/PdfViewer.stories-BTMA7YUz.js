import{j as r,M as s}from"./iframe-CgX-XfZe.js";import{P as p}from"./pdf-viewer-CwtQQhE2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ba-Dt5kM.js";import"./preload-helper-B7xu4jFf.js";import"./PdfViewer-BQYVhQa3.js";import"./index-BcViD_AJ.js";import"./BasePdfViewer-BqO9S9pV.js";import"./BasePdfViewer.module.css-d9p9stE7.js";import"./PdfViewerAnnotationLayer-CW0uIdtg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Da0cWBnE.js";import"./PdfViewerOutlineSidebar-D9HDxhEA.js";import"./PdfViewerSidebarHeader-DkMZQLku.js";import"./useBaseUiId-BXQE2Tij.js";import"./useControlled-CVDZAttb.js";import"./CompositeRoot-DDmELU8T.js";import"./CompositeItem-Cosvl6JF.js";import"./ToolbarRootContext-auY9xRTT.js";import"./composite-CuhqFDst.js";import"./svgIconContainer-CXZEPhaW.js";import"./PdfViewerSearchBar-B-4L6cwa.js";import"./chevron-up-gtJhThd4.js";import"./chevron-down-QOEZh7s4.js";import"./cross-Nv8Io3xy.js";import"./PdfViewerSidebar-CHnxQIHg.js";import"./index-Dj-xdEDu.js";import"./index-a2F2ZKsn.js";import"./index-BmNCbeoV.js";import"./PdfViewerToolbar-BWUeyrQf.js";import"./Button-BRRWL_gG.js";import"./chevron-right-DtncuBpP.js";import"./Input-yuy0l2cX.js";import"./search-DTGDsddM.js";import"./spin-BhyjuYvW.js";import"./error-ByGGXW3h.js";import"./withOsdkMetrics-N-qC9xyD.js";import"./makeExternalStore-CRMwT7Da.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
