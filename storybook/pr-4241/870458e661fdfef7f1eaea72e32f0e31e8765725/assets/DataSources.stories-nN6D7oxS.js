import{j as r}from"./iframe-DjY-zq4T.js";import{O as b}from"./object-table-DF-QdHhQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dacd4SlZ.js";import{u as g}from"./useOsdkClient-B0KEPQnu.js";import"./preload-helper-CSEk-Qtk.js";import"./Table-CRhnJW7k.js";import"./index-06oOGq9j.js";import"./Dialog--nsazc34.js";import"./cross-DERUs9CV.js";import"./svgIconContainer-CNapEC-k.js";import"./useBaseUiId-DFp5uyUH.js";import"./InternalBackdrop-D26JwQLJ.js";import"./composite-DCY6uWMU.js";import"./index-BMjnIn7f.js";import"./index-DcxaLnPt.js";import"./index-DGTC5i-x.js";import"./useEventCallback-PzgcCUA9.js";import"./SkeletonBar-Dx8ysvQu.js";import"./LoadingCell-5sAwNk9V.js";import"./ColumnConfigDialog-COWDssjh.js";import"./DraggableList-CCT3vpwl.js";import"./search-BkyKKFx6.js";import"./Input-C4MHDVmb.js";import"./useControlled-B48Xem7I.js";import"./Button-DVfilVoY.js";import"./small-cross-BKuGvg88.js";import"./ActionButton-ftxjW6SC.js";import"./Checkbox-D5y-CTW9.js";import"./useValueChanged-CSpnuk84.js";import"./CollapsiblePanel-DgbylnBx.js";import"./MultiColumnSortDialog-DgRGdUyK.js";import"./MenuTrigger-C_DmCeIw.js";import"./CompositeItem-OryclLtR.js";import"./ToolbarRootContext-Ck5kVxm5.js";import"./getDisabledMountTransitionStyles-6jqwt93X.js";import"./getPseudoElementBounds-By1yLBCg.js";import"./chevron-down-KVYlhqEa.js";import"./index-DCZf_Vkp.js";import"./error-g17Ipf4s.js";import"./BaseCbacBanner-Ik5u6QMH.js";import"./makeExternalStore-CXgGJpDa.js";import"./Tooltip-C_N0df2q.js";import"./PopoverPopup-CTuviyVj.js";import"./debounce-Dw9byVJT.js";import"./tick-BxkXNXsP.js";import"./DropdownField-DRuEdDXo.js";import"./isEqual-S7vVAoQa.js";import"./withOsdkMetrics-CBDxrN4p.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
