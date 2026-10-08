import{j as i}from"./iframe-D1j4WqtX.js";import{O as p}from"./object-table-D1E58D51.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BB9Ev8m6.js";import"./preload-helper-CIO_iRSv.js";import"./Table-CE1gQfSW.js";import"./index-CF3Sq86v.js";import"./Dialog-Bmt22dMU.js";import"./cross-Bu-eP3kR.js";import"./svgIconContainer-DQLh4QVM.js";import"./useBaseUiId-CvpmnQHF.js";import"./InternalBackdrop-BgpNPtgI.js";import"./composite-BY3OkPXB.js";import"./index-BVTY6Q3I.js";import"./index-CMSKaHd2.js";import"./index-DEbP6mAZ.js";import"./useEventCallback-BMLswSq8.js";import"./SkeletonBar-goStr7xk.js";import"./LoadingCell-hNuanuvj.js";import"./ColumnConfigDialog-B8gfsHk_.js";import"./DraggableList-iSyTQ6ue.js";import"./search-Ci42lqAV.js";import"./Input-aBbimhzA.js";import"./useControlled-Dvj50PQH.js";import"./Button-DfvOvfvD.js";import"./small-cross-4Og_SUqy.js";import"./ActionButton-DK01lYjB.js";import"./Checkbox-OD7wr22i.js";import"./useValueChanged-B-1W8pQZ.js";import"./CollapsiblePanel-CU0iKWn6.js";import"./MultiColumnSortDialog-Bd0-hbtk.js";import"./MenuTrigger-D-NO9sux.js";import"./CompositeItem-BjdsKKJr.js";import"./ToolbarRootContext-Bggxr9N9.js";import"./getDisabledMountTransitionStyles-D8w4jYHi.js";import"./getPseudoElementBounds-BvCK0FHD.js";import"./chevron-down-9_oXjY5S.js";import"./index-C_i7dQHN.js";import"./error-CSigbrmD.js";import"./BaseCbacBanner-Q_vrCcEx.js";import"./makeExternalStore-CpT-N4RM.js";import"./Tooltip-sztRiYUo.js";import"./PopoverPopup-DhqCBiK0.js";import"./debounce-7OJ_vS6c.js";import"./useOsdkClient-DKIRHYjG.js";import"./tick-CpAUDOtg.js";import"./DropdownField-CtIEk2rp.js";import"./isEqual-CV9p-CTi.js";import"./withOsdkMetrics-9ebMCx2K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
