import{j as i}from"./iframe-CzBdkE8j.js";import{O as p}from"./object-table-Xx4g3onV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8ybZHHo.js";import"./preload-helper-DAcIQxKV.js";import"./Table-BL5aJ5vf.js";import"./index-nrSAC82l.js";import"./Dialog-0yBycXYz.js";import"./cross-DJGmKxbL.js";import"./svgIconContainer-vvQ2H1Kh.js";import"./useBaseUiId-DYoSQlXN.js";import"./InternalBackdrop-BX1TzKYN.js";import"./composite-NGmoik8z.js";import"./index-DxeeQ0ql.js";import"./index-DjEUrq-J.js";import"./index-C1mzUzFI.js";import"./useEventCallback-CE4dkAWk.js";import"./SkeletonBar-CxjV6sy3.js";import"./LoadingCell-9tetKVhd.js";import"./ColumnConfigDialog-6-FrOOaZ.js";import"./DraggableList-Dt-LkUjz.js";import"./search-G4OheDlQ.js";import"./Input-C91PS3np.js";import"./useControlled-CvawZQ67.js";import"./Button-BbinMP78.js";import"./small-cross-BTjUTHgC.js";import"./ActionButton-s9UbQrV0.js";import"./Checkbox-BnDFkLF7.js";import"./useValueChanged-B4Hgf5Tp.js";import"./CollapsiblePanel-Datx7g9u.js";import"./MultiColumnSortDialog-BdKQgwrU.js";import"./MenuTrigger-BPqOoWyQ.js";import"./CompositeItem-6yW-EHF-.js";import"./ToolbarRootContext-B8cFWt1N.js";import"./getDisabledMountTransitionStyles-DVtht9dj.js";import"./getPseudoElementBounds-RzDWICHu.js";import"./chevron-down-BMeIm_My.js";import"./index-BHtlx1SN.js";import"./error-BChTcIQI.js";import"./BaseCbacBanner-CBzuV4Dn.js";import"./makeExternalStore-oT7e1se-.js";import"./Tooltip-kjlyHoV2.js";import"./isObject-Cd8fWrM7.js";import"./debounce-Da2LiWyo.js";import"./useOsdkClient-JXogxqf0.js";import"./tick-bUnIpS28.js";import"./DropdownField-2s0unNiS.js";import"./isEqual-CIxNRX36.js";import"./_baseIsEqual-DcQSHg13.js";import"./withOsdkMetrics-BruKftXq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
