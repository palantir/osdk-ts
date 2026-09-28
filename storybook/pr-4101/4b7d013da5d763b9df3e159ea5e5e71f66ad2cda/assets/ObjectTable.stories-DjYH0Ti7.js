import{j as i}from"./iframe-CxXsZYaL.js";import{O as p}from"./object-table-zRXuZuYV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BC2XMko3.js";import"./preload-helper-Dt2THrkM.js";import"./Table-CE4R3ZP_.js";import"./index-DPiocoAy.js";import"./Dialog-43gVh9Z0.js";import"./cross-DyjS402Z.js";import"./svgIconContainer-B1eyjN3k.js";import"./useBaseUiId-Bv8MvEl3.js";import"./InternalBackdrop-BI6mC2qq.js";import"./composite-DTKgIMa8.js";import"./index-Cegb6wp-.js";import"./index-BIZErmx-.js";import"./index-Cw4rMGGb.js";import"./useEventCallback-D6R4tDnw.js";import"./SkeletonBar-DLXC3u_6.js";import"./LoadingCell-Dhr99XtA.js";import"./ColumnConfigDialog-BP9G56Gj.js";import"./DraggableList-C7BzcTVt.js";import"./search-DvGGeQU1.js";import"./Input-CWxuf688.js";import"./useControlled-CCbrWuYr.js";import"./Button-By61fxAS.js";import"./small-cross-DNpUAcLG.js";import"./ActionButton-IBcvUrIn.js";import"./Checkbox-AcH8WHBX.js";import"./useValueChanged-CHP3biT2.js";import"./CollapsiblePanel-DMmR_d8n.js";import"./MultiColumnSortDialog-D0OQTQVu.js";import"./MenuTrigger-CiXpMiQW.js";import"./CompositeItem-ltfNlpKQ.js";import"./ToolbarRootContext-DwwnRCz6.js";import"./getDisabledMountTransitionStyles-BR22wxCp.js";import"./getPseudoElementBounds-DpN1Og-q.js";import"./chevron-down-LKr_hJQt.js";import"./index-CvA8CM7Y.js";import"./error-D5twijSF.js";import"./BaseCbacBanner-BTgCkBtd.js";import"./makeExternalStore-C8dW_5p-.js";import"./Tooltip-64p6zcvU.js";import"./PopoverPopup-u7OHtDv1.js";import"./debounce-C7Sw8tZF.js";import"./useOsdkClient-B9HSbxHr.js";import"./tick-CMFb73FH.js";import"./DropdownField-BIToETMe.js";import"./isEqual-D8N_VdCJ.js";import"./withOsdkMetrics-BmsRu25F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
