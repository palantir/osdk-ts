import{j as i}from"./iframe-CwQyvPXr.js";import{O as p}from"./object-table-Dy-Bo_58.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQS_hP81.js";import"./preload-helper-nPWeI9RW.js";import"./Table-BA0jNj6b.js";import"./index-9af34HI7.js";import"./Dialog-_yh7eAvg.js";import"./cross-DVZdLFyf.js";import"./svgIconContainer-CRE1ctgD.js";import"./useBaseUiId-ChwMhbSq.js";import"./InternalBackdrop-C5uicSal.js";import"./composite-DoyUokVD.js";import"./index-DRKHNjEq.js";import"./index-D-pe9IzG.js";import"./index-BF4luIbb.js";import"./useEventCallback-tfQ8eL-s.js";import"./SkeletonBar-6fYrU5JU.js";import"./LoadingCell-Cgpkfnax.js";import"./ColumnConfigDialog-lKxCjS-f.js";import"./DraggableList-CfLEQ4sK.js";import"./search-BlHvZBtL.js";import"./Input-C6MXRUFM.js";import"./useControlled-C8JNZz-A.js";import"./isEqual-Dk7Jbde7.js";import"./isObject-C_uX0ufT.js";import"./Button-B0hT9H_M.js";import"./ActionButton-DF2889v9.js";import"./Checkbox-CpoDk5nv.js";import"./useValueChanged-B95zsXHE.js";import"./CollapsiblePanel-tuFoizxl.js";import"./MultiColumnSortDialog-GwmWKlU6.js";import"./MenuTrigger-Bz9GdCSD.js";import"./CompositeItem-BIC57Pt6.js";import"./ToolbarRootContext-srCRfALr.js";import"./getDisabledMountTransitionStyles-DoYmXnU9.js";import"./getPseudoElementBounds-E0oqKne9.js";import"./chevron-down-CTW1e4Xq.js";import"./index-DAInQTbe.js";import"./error-UdfzbvcV.js";import"./BaseCbacBanner-D91hBeme.js";import"./makeExternalStore-CqNNKoNM.js";import"./Tooltip-CGx4QCB0.js";import"./PopoverPopup-DR2aT0I2.js";import"./toNumber-7VrwKuG0.js";import"./useOsdkClient-UPo08UPI.js";import"./tick-BrKL1Vur.js";import"./DropdownField-s5EpeKso.js";import"./withOsdkMetrics-DIsQZe29.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
