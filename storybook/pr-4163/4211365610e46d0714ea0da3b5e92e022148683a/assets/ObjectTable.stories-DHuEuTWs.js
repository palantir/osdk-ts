import{j as i}from"./iframe-DKjGRkFv.js";import{O as p}from"./object-table-P6HhlI8x.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-eAnp9EAI.js";import"./preload-helper-C6rqf7Sg.js";import"./Table-BZ_fhjEt.js";import"./index-_KqllXCA.js";import"./Dialog-BUWkJvJD.js";import"./cross-Byw5v4Q_.js";import"./svgIconContainer-D-LkokGt.js";import"./useBaseUiId-jPX4s7al.js";import"./InternalBackdrop-BxtymM3X.js";import"./composite-Be6SAy6p.js";import"./index-BP_2hfUi.js";import"./index-Bcv2oXK6.js";import"./index-CQPVNm9V.js";import"./useEventCallback-BdnTh0Kq.js";import"./SkeletonBar-Eqz4moCH.js";import"./LoadingCell-CMdJ_9OA.js";import"./ColumnConfigDialog-z-zlKVrA.js";import"./DraggableList-DkY7Kz_a.js";import"./search-CvJrksrv.js";import"./Input-Cl-jE7Eu.js";import"./useControlled-BvxP1vnA.js";import"./Button-CT84oTMh.js";import"./small-cross-Cxklwva_.js";import"./ActionButton-DAdOrkYi.js";import"./Checkbox-DQBk6DW9.js";import"./useValueChanged-HwxNHl9M.js";import"./CollapsiblePanel-DC1OaWK6.js";import"./MultiColumnSortDialog-D9-ihbRr.js";import"./MenuTrigger-Dbm1l1kq.js";import"./CompositeItem-CdsaUFys.js";import"./ToolbarRootContext-VDTGiuqQ.js";import"./getDisabledMountTransitionStyles-DRdQhkzq.js";import"./getPseudoElementBounds-DHlxXCHC.js";import"./chevron-down-zDaWrCdE.js";import"./index-CVidFmw5.js";import"./error-CIT7Z9G8.js";import"./BaseCbacBanner-Bx7lFHvv.js";import"./makeExternalStore-BnEyfyYD.js";import"./Tooltip-KIWE0Mve.js";import"./PopoverPopup--8y4HuFf.js";import"./debounce-BuHDhe6S.js";import"./useOsdkClient-BBbCJZXc.js";import"./tick-jLPbNGml.js";import"./DropdownField-BHrdVt_T.js";import"./isEqual-Bo497v3Z.js";import"./withOsdkMetrics-e_OoMjHx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
