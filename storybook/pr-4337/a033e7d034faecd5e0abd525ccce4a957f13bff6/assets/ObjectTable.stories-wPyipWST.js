import{j as i}from"./iframe-CSosjOmv.js";import{O as p}from"./object-table-k0Pd3U0J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BACBh9jV.js";import"./preload-helper-C-gjDSXJ.js";import"./Table-D1ovXRRz.js";import"./index-DzdecULf.js";import"./Dialog-fffMjTb5.js";import"./cross-CBsOArVe.js";import"./svgIconContainer-C8vg2tag.js";import"./useBaseUiId-B_aLw92E.js";import"./InternalBackdrop-BxW846uB.js";import"./composite-CFm1NNj3.js";import"./index-BvXFeSY8.js";import"./index-C7NVW3nO.js";import"./index-CfZcDCWD.js";import"./useEventCallback-DOvtzK6I.js";import"./SkeletonBar-CbLIOtic.js";import"./LoadingCell-DaoBTPNn.js";import"./ColumnConfigDialog-WGiHcGK1.js";import"./DraggableList-BWfhlxg0.js";import"./search-1vXjOjjG.js";import"./Input-BYDbWdB8.js";import"./useControlled-DcuHztpz.js";import"./Button-CXkasH7A.js";import"./small-cross-DoPihXaf.js";import"./ActionButton-C_1ovufb.js";import"./Checkbox-DaMXtAIo.js";import"./useValueChanged-DnGO4l1i.js";import"./CollapsiblePanel-CDB1SVVs.js";import"./MultiColumnSortDialog-BcsfvTRY.js";import"./MenuTrigger-Cofu7USV.js";import"./CompositeItem-CDrUmRrI.js";import"./ToolbarRootContext-DYXzz-gp.js";import"./getDisabledMountTransitionStyles-DIK2usmu.js";import"./getPseudoElementBounds-DlEj5IwE.js";import"./chevron-down-C05xfaFU.js";import"./index-qg2om6Py.js";import"./error-C8uWSFuO.js";import"./BaseCbacBanner-BkrhTTig.js";import"./makeExternalStore-C3SFvB3D.js";import"./Tooltip-BMDob29c.js";import"./PopoverPopup-BSZvkPJG.js";import"./debounce-BzCw0aaH.js";import"./useOsdkClient-p2uvl16R.js";import"./tick-DgeixQ7I.js";import"./DropdownField-CLwVEV16.js";import"./isEqual-C9GwESqS.js";import"./withOsdkMetrics-DObV_URP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
