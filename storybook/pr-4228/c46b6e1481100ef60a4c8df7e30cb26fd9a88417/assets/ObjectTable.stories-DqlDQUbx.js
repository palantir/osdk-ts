import{j as i}from"./iframe-DbS9D_O3.js";import{O as p}from"./object-table-DYoBWSpa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_fvMVQb.js";import"./preload-helper-CCKJK0hs.js";import"./Table-D4U-7O05.js";import"./index-DtbYZf2o.js";import"./Dialog-DfBMiG9A.js";import"./cross-D8Acxe7x.js";import"./svgIconContainer-BWtkfvw7.js";import"./useBaseUiId-DGo7w5rM.js";import"./InternalBackdrop-CUaheQ60.js";import"./composite-BVFSknHB.js";import"./index-DjECoGdr.js";import"./index-Cz6dsjwa.js";import"./index-Bo1c5tnJ.js";import"./useEventCallback-Bh0Tbg4X.js";import"./SkeletonBar-C0UKIou7.js";import"./LoadingCell-DXoSJvwg.js";import"./ColumnConfigDialog-LSyN-6-a.js";import"./DraggableList-Bl_hKlJz.js";import"./search-O2b5hRrN.js";import"./Input-BjkhNLJi.js";import"./useControlled-BU_DIXGN.js";import"./Button-CgXhCctb.js";import"./small-cross-CURfx7dD.js";import"./ActionButton-CV3Gtc6x.js";import"./Checkbox-DYEou9Z6.js";import"./useValueChanged-D8jiBEOA.js";import"./CollapsiblePanel-W0IgEcMp.js";import"./MultiColumnSortDialog-Ci9aVGlw.js";import"./MenuTrigger-Cx8VBTJz.js";import"./CompositeItem-CBVEdJrU.js";import"./ToolbarRootContext-DAT__9MO.js";import"./getDisabledMountTransitionStyles-B-ib1OlT.js";import"./getPseudoElementBounds-1TOviJ8v.js";import"./chevron-down-CRHApYO-.js";import"./index-Cn4ErW0D.js";import"./error-RW3dtBbn.js";import"./BaseCbacBanner-DI9iiF5O.js";import"./makeExternalStore-qkyjGCKT.js";import"./Tooltip-DDRYkVBh.js";import"./PopoverPopup-XTmmwdNv.js";import"./debounce-CLlBWcHq.js";import"./useOsdkClient-CkkpSDd5.js";import"./tick-BOzZ-jjE.js";import"./DropdownField-D6cu5JEW.js";import"./isEqual-CNxWTIVQ.js";import"./withOsdkMetrics-COgOpeFu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
