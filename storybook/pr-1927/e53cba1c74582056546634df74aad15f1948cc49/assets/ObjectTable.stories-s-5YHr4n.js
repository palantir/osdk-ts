import{j as i}from"./iframe-YwePy6Na.js";import{O as p}from"./object-table-Dp9r6Amm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7nffWpu.js";import"./preload-helper-C5O8HAF_.js";import"./Table-vKwb6riK.js";import"./index-kDdf5Tk2.js";import"./Dialog-DkeogbIL.js";import"./cross-Y-lq_61F.js";import"./svgIconContainer-nKGCa_Yw.js";import"./useBaseUiId-vveaqpRL.js";import"./InternalBackdrop-n_VXKU8h.js";import"./composite-BvfYu_Ep.js";import"./index-B-58BhWJ.js";import"./index-Y7QOpJkL.js";import"./index-TgM_EtVZ.js";import"./useEventCallback-B9544m6r.js";import"./SkeletonBar-C0QVMjH7.js";import"./LoadingCell-COl8_Q6l.js";import"./ColumnConfigDialog-DwZUCWad.js";import"./DraggableList-z6CvTLCx.js";import"./search-CkQaqOfS.js";import"./Input-BbXslpL4.js";import"./useControlled-CXJ0FOIB.js";import"./Button-CajACsUP.js";import"./small-cross-BoYlxTd8.js";import"./ActionButton--mSG10q_.js";import"./Checkbox-B-rZLKxz.js";import"./useValueChanged-DOhoBYTW.js";import"./CollapsiblePanel-DhdNZ43G.js";import"./MultiColumnSortDialog-BDmfQifF.js";import"./MenuTrigger-H-hNI4h4.js";import"./CompositeItem-DwKpE3E9.js";import"./ToolbarRootContext-IvyHUIol.js";import"./getDisabledMountTransitionStyles-Dp-GSE2g.js";import"./getPseudoElementBounds-DvHm1E4j.js";import"./chevron-down-APdhRSd1.js";import"./index-B8BnOK3F.js";import"./error-BpwHZdni.js";import"./BaseCbacBanner-CV3UV8UT.js";import"./makeExternalStore-BDW_RQe5.js";import"./Tooltip-DWBJxFHb.js";import"./PopoverPopup-Di-M8mNa.js";import"./debounce-EjzoHQP3.js";import"./useOsdkClient-Dvnc0JJ7.js";import"./tick-yO9PCDBT.js";import"./DropdownField-DJy3CWMh.js";import"./isEqual-CjW4gmi7.js";import"./withOsdkMetrics-CdgeYRWr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
