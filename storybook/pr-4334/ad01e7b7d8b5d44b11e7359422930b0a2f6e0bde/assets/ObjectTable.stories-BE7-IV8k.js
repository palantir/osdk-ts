import{j as i}from"./iframe-A_fOpVjR.js";import{O as p}from"./object-table-CCMmutgl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3Fm0Y_o.js";import"./preload-helper-NNWOvscG.js";import"./Table-Ct0jk0QM.js";import"./index-C7FsEBhG.js";import"./Dialog-D5xAhZEq.js";import"./cross-BwNW8yAx.js";import"./svgIconContainer-Bq9Z_PVa.js";import"./useBaseUiId-C7m94P3Q.js";import"./InternalBackdrop-A8sqO8XG.js";import"./composite-BNlZpCYa.js";import"./index-CSGRTjjX.js";import"./index-BpdiA8C2.js";import"./index-CQmYgAHq.js";import"./useEventCallback-D0ioUuoD.js";import"./SkeletonBar-D_FkMl9_.js";import"./LoadingCell-Bq-rfy4t.js";import"./ColumnConfigDialog-D_VKogHN.js";import"./DraggableList-D9SbGZ1S.js";import"./search-DjdTcbXm.js";import"./Input-CPD69t9E.js";import"./useControlled-C2rTfK3U.js";import"./Button-DqOCaaxJ.js";import"./small-cross-DNEXD1XY.js";import"./ActionButton-D4KDRNf3.js";import"./Checkbox-CdBaEuZk.js";import"./useValueChanged-R8r5ZzIC.js";import"./CollapsiblePanel-D5N62OEf.js";import"./MultiColumnSortDialog-BTRSkNMD.js";import"./MenuTrigger-Dx8kVSll.js";import"./CompositeItem-CZZ_uEuP.js";import"./ToolbarRootContext-DqquyoSz.js";import"./getDisabledMountTransitionStyles-ChkLH3QV.js";import"./getPseudoElementBounds-C_2Jp177.js";import"./chevron-down-C0LTAe4-.js";import"./index-BLNyRWLa.js";import"./error-CBOQy5rF.js";import"./BaseCbacBanner-Cd-uPTKw.js";import"./makeExternalStore-BnincROM.js";import"./Tooltip-BmW3AFCg.js";import"./PopoverPopup-CgMv4Y2M.js";import"./debounce-DtL1LGCj.js";import"./useOsdkClient-Bel45J9c.js";import"./tick-C7t8KzWK.js";import"./DropdownField-3zZSXBjS.js";import"./isEqual-BVMfoPU4.js";import"./withOsdkMetrics-SqCQVKc1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
