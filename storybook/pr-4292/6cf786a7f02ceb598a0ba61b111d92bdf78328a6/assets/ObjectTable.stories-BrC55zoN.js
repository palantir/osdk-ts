import{j as i}from"./iframe-yzha5v0q.js";import{O as p}from"./object-table-7QNEleDy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-QL3qKRA_.js";import"./preload-helper-D-8FAAW5.js";import"./Table-1KtfhII5.js";import"./index-60EGa8qT.js";import"./Dialog-C5JPUXP6.js";import"./cross-BlwLOBUQ.js";import"./svgIconContainer-C44iOk89.js";import"./useBaseUiId-BbIMkHOG.js";import"./InternalBackdrop-Tn-t9TYq.js";import"./composite-BDH9_dFX.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./index-C1kDTagr.js";import"./useEventCallback-DsjWVVDr.js";import"./SkeletonBar-aZ1R4mdC.js";import"./LoadingCell-BQBa2JlH.js";import"./ColumnConfigDialog-CVF6mbu9.js";import"./DraggableList-Blt51KXd.js";import"./search-gm56Xs7t.js";import"./Input-EyuyzT2W.js";import"./useControlled-D0bVi2TG.js";import"./Button-BiUOfKuO.js";import"./small-cross-Cm5dK0ec.js";import"./ActionButton-DTkeL8Lj.js";import"./Checkbox-tgD1qeBp.js";import"./useValueChanged-B6X9c3a_.js";import"./CollapsiblePanel-DOlyQkQE.js";import"./MultiColumnSortDialog-S4FDUM3S.js";import"./MenuTrigger-CuI3s9S9.js";import"./CompositeItem-ha9gBhOi.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./getDisabledMountTransitionStyles-IE49pSF5.js";import"./getPseudoElementBounds-DPNIWnqr.js";import"./chevron-down-DLVlSQ8P.js";import"./index-DbIozRF2.js";import"./error-B0YQBao9.js";import"./BaseCbacBanner-DjcIjJbq.js";import"./makeExternalStore-DbXaKl2K.js";import"./Tooltip-DPFg4mPg.js";import"./PopoverPopup-C3DSbH4l.js";import"./debounce-X5gf-7Uy.js";import"./useOsdkClient-Bxqh4Bcm.js";import"./tick-DY8FjhzJ.js";import"./DropdownField-Dw87S1et.js";import"./isEqual-BwFhy3Dl.js";import"./withOsdkMetrics-DqbCp-LC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
