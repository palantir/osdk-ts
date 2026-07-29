import{j as i}from"./iframe-CSumVy5B.js";import{O as p}from"./object-table-Bl8NxYhb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjGqYqlW.js";import"./preload-helper-CBombYiI.js";import"./Table-BLnnkm8J.js";import"./index-DQ45Rr9-.js";import"./Dialog-DkZ_yJmU.js";import"./cross-Db0Tmz8n.js";import"./svgIconContainer-CtPAyXoD.js";import"./useBaseUiId-DRFCB_IR.js";import"./InternalBackdrop-B7eXhqDx.js";import"./composite-Dw2E63KR.js";import"./index-ClUgQiOR.js";import"./index-Cqhmw3j4.js";import"./index-qO8uI0qZ.js";import"./useEventCallback-D_ATAylI.js";import"./SkeletonBar-BkpJk7mB.js";import"./LoadingCell-Ccz12-DM.js";import"./ColumnConfigDialog-BMtFrbjb.js";import"./DraggableList-D8qLNXOP.js";import"./search-CdDv8eEf.js";import"./Input-BDuVWvkz.js";import"./useControlled-CG83hz7Q.js";import"./isEqual-NDxDjbhg.js";import"./isObject-CeUm-6WI.js";import"./Button-bqCpVfIv.js";import"./ActionButton-B27y8uaN.js";import"./Checkbox-hIJ2dKTg.js";import"./useValueChanged-CoFQDzs-.js";import"./CollapsiblePanel-BtD1yVpg.js";import"./MultiColumnSortDialog-BSR7QXpa.js";import"./MenuTrigger-BJV1-YTX.js";import"./CompositeItem-Dn5e_dwj.js";import"./ToolbarRootContext-ByQ5hSPJ.js";import"./getDisabledMountTransitionStyles-Cc1k6J-a.js";import"./getPseudoElementBounds-Yza0u5Gv.js";import"./chevron-down-DgqRz-6y.js";import"./index-DKCFta18.js";import"./error-YEXOSncq.js";import"./BaseCbacBanner-CCmKu2-W.js";import"./makeExternalStore-CSPbLBzs.js";import"./Tooltip-fesy7LJ_.js";import"./PopoverPopup-4ar7d7vN.js";import"./toNumber-BS1D0Nfz.js";import"./useOsdkClient-7V-ddhhv.js";import"./tick-C-DdUab-.js";import"./DropdownField-CclbFd0n.js";import"./withOsdkMetrics-D03-ZDAS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
