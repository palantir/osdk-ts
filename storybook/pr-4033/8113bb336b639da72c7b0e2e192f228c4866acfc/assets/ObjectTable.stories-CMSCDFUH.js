import{j as i}from"./iframe-DnMZhogX.js";import{O as p}from"./object-table-DKuYigWh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlrJOEKk.js";import"./preload-helper-D4NPUWDF.js";import"./Table-Du0QxviT.js";import"./index-C6vUCj3I.js";import"./Dialog-Coo3NzOA.js";import"./cross-B0Br0EiR.js";import"./svgIconContainer-BVAzBycF.js";import"./useBaseUiId-BQvmXl_6.js";import"./InternalBackdrop-bRjvxNXQ.js";import"./composite-C04hi1zy.js";import"./index-t2KVREOA.js";import"./index-CkhjCsS5.js";import"./index-C1Yu6uYj.js";import"./useEventCallback-CPVQW2c6.js";import"./SkeletonBar-BWUs5aOa.js";import"./LoadingCell-kkMdfEaE.js";import"./ColumnConfigDialog-DJri1zxJ.js";import"./DraggableList-vlwg7DuV.js";import"./search-Dq0e8pTI.js";import"./Input-LnfuE3I2.js";import"./useControlled-B2iKOn4D.js";import"./Button-DNd_NMyi.js";import"./small-cross-B3kXkk-5.js";import"./ActionButton-uko6JLNE.js";import"./Checkbox-sZn8KbS5.js";import"./useValueChanged-BNYopCoC.js";import"./CollapsiblePanel-CJMTMEOR.js";import"./MultiColumnSortDialog-DLt0iXml.js";import"./MenuTrigger-DshnL46j.js";import"./CompositeItem-r96J_nIs.js";import"./ToolbarRootContext-BocpL34Y.js";import"./getDisabledMountTransitionStyles-NTzjgmpy.js";import"./getPseudoElementBounds-2ZWhj0gz.js";import"./chevron-down-q0wNWe4O.js";import"./index-3k87IEg2.js";import"./error-DSDfnydb.js";import"./BaseCbacBanner-BqZmgPUx.js";import"./makeExternalStore-EsKTsg8A.js";import"./Tooltip-2H7h1LjR.js";import"./PopoverPopup-XYXFggLJ.js";import"./debounce-DRL1bJAs.js";import"./useOsdkClient-BnFs3xMf.js";import"./tick-BfcL4nFt.js";import"./DropdownField-mRbtMN2b.js";import"./isEqual-DBpRRl3J.js";import"./withOsdkMetrics-DSRao68Z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
