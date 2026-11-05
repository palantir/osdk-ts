import{j as i}from"./iframe-DfKl0JGk.js";import{O as p}from"./object-table-dUfpxSwm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJXZkwZc.js";import"./preload-helper-D2qZKtpg.js";import"./Table-CGlr-_aD.js";import"./index-aB099sio.js";import"./Dialog-C1AxpQJF.js";import"./cross-BNEnN7HL.js";import"./svgIconContainer-BAQrNZDY.js";import"./useBaseUiId-BFnbzIXU.js";import"./InternalBackdrop-DQiuVbxP.js";import"./composite-DoivXE_r.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./index-CKLNQuck.js";import"./useEventCallback-BPj-zmzp.js";import"./SkeletonBar-C3WAp5HN.js";import"./LoadingCell-Co75bDke.js";import"./ColumnConfigDialog-DLt-N818.js";import"./DraggableList-BmxyglgV.js";import"./search-BwIUQD_S.js";import"./Input-DOLGbI8I.js";import"./useControlled-CuqWKABX.js";import"./Button-B7sS73TJ.js";import"./small-cross-l23fMmT-.js";import"./ActionButton-BwTBHLns.js";import"./Checkbox-CpB2lS1k.js";import"./useValueChanged-BcrLWEfZ.js";import"./CollapsiblePanel-CgKpLYfM.js";import"./MultiColumnSortDialog-C1kscGYQ.js";import"./MenuTrigger-DB-s2Xyj.js";import"./CompositeItem-DCu8K_u-.js";import"./ToolbarRootContext-Djhkt96c.js";import"./getDisabledMountTransitionStyles-CvD_X3uJ.js";import"./getPseudoElementBounds-CiQNVwt7.js";import"./chevron-down-CdRuI-bU.js";import"./index-B1rjjc3Y.js";import"./error-Ci3w5MtL.js";import"./BaseCbacBanner-A-HZBMDm.js";import"./makeExternalStore-CSIEjtLx.js";import"./Tooltip-bZjfkZin.js";import"./isObject-D8Oji8bH.js";import"./debounce-BoOWLf3v.js";import"./useOsdkClient-D-epmGHT.js";import"./tick-Bf5SboOl.js";import"./DropdownField-DWj7vxDR.js";import"./isEqual-Cw-Jmji8.js";import"./_baseIsEqual-DR0ymikg.js";import"./withOsdkMetrics-DiSdxyjG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
