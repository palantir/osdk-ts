import{j as r,M as s}from"./iframe-mgqf8OZi.js";import{P as p}from"./pdf-viewer-BxpJ2Hcx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-JFz9jGvo.js";import"./preload-helper-C6SQT8UT.js";import"./PdfViewer-DsFNcvTV.js";import"./index-GTfiZUIM.js";import"./BasePdfViewer-CVmy4ye-.js";import"./BasePdfViewer.module.css-JToXGpJe.js";import"./PdfViewerAnnotationLayer-BEiv6eak.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_F1CyfJ.js";import"./PdfViewerOutlineSidebar-BNCQ1k8D.js";import"./PdfViewerSidebarHeader-vgtL3Tjc.js";import"./useBaseUiId-rjNzDssU.js";import"./useControlled-DnmOZ-e1.js";import"./CompositeRoot-Dg5ciHRi.js";import"./CompositeItem-B5XhVs9k.js";import"./ToolbarRootContext-DXjHGJkz.js";import"./composite-BsXSlU2S.js";import"./svgIconContainer-BQB9e_Z9.js";import"./PdfViewerSearchBar-kbkSde0u.js";import"./chevron-up-B8jvJgmU.js";import"./chevron-down-CvP42XCE.js";import"./cross-B_dcVm8T.js";import"./PdfViewerSidebar-D5E4SAOj.js";import"./index-CWWnTRcQ.js";import"./index-CgMXMemF.js";import"./index-DsvT80A6.js";import"./PdfViewerToolbar-Bc8OHHAG.js";import"./Button-CvdgIKvp.js";import"./chevron-right-LH9iRfMi.js";import"./Input-Cm9G-_vw.js";import"./search-fgyV2px-.js";import"./spin-h-uXSmlS.js";import"./error-5K0NVF3b.js";import"./withOsdkMetrics-CrZy2PZ2.js";import"./makeExternalStore-BoIB8VtI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
