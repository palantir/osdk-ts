import{j as r,M as s}from"./iframe-DpkDs-j9.js";import{P as p}from"./pdf-viewer-DEyCBvxj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ByopVIfP.js";import"./preload-helper-BJT4uFVz.js";import"./PdfViewer-BrAJSIed.js";import"./index-BfXl5P7F.js";import"./BasePdfViewer-j8ARXbtv.js";import"./BasePdfViewer.module.css-DOF4dRbd.js";import"./PdfViewerAnnotationLayer-C_8Xqtue.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3KU6zTy.js";import"./PdfViewerOutlineSidebar-DmCbNxv_.js";import"./PdfViewerSidebarHeader-B7e9aC16.js";import"./useBaseUiId-BRApLhFH.js";import"./useControlled-Z-gfVngv.js";import"./CompositeRoot-C1Mq1mgm.js";import"./CompositeItem-BWOALM-p.js";import"./ToolbarRootContext-BtylWzdM.js";import"./composite-CYXI2UHT.js";import"./svgIconContainer-0YWxOZfe.js";import"./PdfViewerSearchBar-DqapoxaV.js";import"./chevron-up-JsLnX-_r.js";import"./chevron-down-_hw012xs.js";import"./cross-CySzb61z.js";import"./PdfViewerSidebar-jBnldkEL.js";import"./index-tOaH1qey.js";import"./index-CXFl5eQh.js";import"./index-g8PO-kx8.js";import"./PdfViewerToolbar-C9DDMNYQ.js";import"./Button-DUyzdMzu.js";import"./chevron-right-90eI8Xop.js";import"./Input-xEESwrVF.js";import"./search-9Dh1YH6c.js";import"./spin-6wkVDtYs.js";import"./error-CJpmyc4X.js";import"./withOsdkMetrics-D7yY5fd-.js";import"./makeExternalStore-DVFvu1DO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
