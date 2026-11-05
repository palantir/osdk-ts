import{j as r}from"./iframe-DZSjsAiP.js";import{O as b}from"./object-table-BC2oUq9v.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJhQAdIb.js";import{u as g}from"./useOsdkClient-Dqm5L56v.js";import"./preload-helper-DRp4yq1n.js";import"./Table-D-QNoyWD.js";import"./index-CfG6lRDS.js";import"./Dialog-D1OJOqd5.js";import"./cross-DuxYv-Qd.js";import"./svgIconContainer-oLZG0PXz.js";import"./useBaseUiId-DqEZVBYJ.js";import"./InternalBackdrop-ctv3Ze3z.js";import"./composite-C_s-Ej-L.js";import"./index-BKSH5ZIy.js";import"./index-CPoJpgxQ.js";import"./index-CLFNZu11.js";import"./useEventCallback-CzHnZD9n.js";import"./SkeletonBar-BxwS5lxe.js";import"./LoadingCell-CYbun_Sm.js";import"./ColumnConfigDialog-CYXHMWnm.js";import"./DraggableList-CNgtq2rM.js";import"./search-BIZEGKYQ.js";import"./Input-D45tcUlW.js";import"./useControlled-CW4hq1Ru.js";import"./Button-DFAegWDw.js";import"./small-cross-DZyRXeJ7.js";import"./ActionButton-DXV2VJ-U.js";import"./Checkbox-jKlPklgs.js";import"./useValueChanged-BwN-noW6.js";import"./CollapsiblePanel-CEmxw9fT.js";import"./MultiColumnSortDialog-AhuF8fVt.js";import"./MenuTrigger-CMH-YjvD.js";import"./CompositeItem-BdQ_Qgkw.js";import"./ToolbarRootContext-DC4x9xJZ.js";import"./getDisabledMountTransitionStyles-DuVbYN_c.js";import"./getPseudoElementBounds-BIjCqLho.js";import"./chevron-down-Cf7GCw_E.js";import"./index-ORKGFXoZ.js";import"./error-w1f9WiTY.js";import"./BaseCbacBanner-Duqtv5L9.js";import"./makeExternalStore-BvoRFHwl.js";import"./Tooltip-DnOhR-9t.js";import"./PopoverPopup-BB3NXsKU.js";import"./debounce-BY9LZGam.js";import"./tick-DuDzm3Ok.js";import"./DropdownField-DScFQheE.js";import"./isEqual-WjrsbOnG.js";import"./withOsdkMetrics-DwbEPMEH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
