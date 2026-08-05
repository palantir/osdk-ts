import{j as i}from"./iframe-BuWAiJqq.js";import{O as p}from"./object-table-Dg6uTo_U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Q2Gcgt8n.js";import"./preload-helper-GKB8uXJQ.js";import"./Table-wMmYtE5v.js";import"./index-DKQN3MGn.js";import"./Dialog-Dg4Udp1v.js";import"./cross-DjEkx8hG.js";import"./svgIconContainer-DByURt-f.js";import"./useBaseUiId-GGObT-JF.js";import"./InternalBackdrop-B0bWqSaz.js";import"./composite-C1SnCG4A.js";import"./index-DFAgF64G.js";import"./index-B9dzMRkW.js";import"./index-DEUOQSO_.js";import"./useEventCallback-BPOi9RYR.js";import"./SkeletonBar-CLVSe2tF.js";import"./LoadingCell-2Ffy1nwL.js";import"./ColumnConfigDialog-BgUSYDwe.js";import"./DraggableList-BGVr5y5K.js";import"./search-BdQ2EhWX.js";import"./Input-CcDq3pYP.js";import"./useControlled-Cctdi5Pw.js";import"./isEqual-2xf-usy8.js";import"./isObject-aZqfOsIN.js";import"./Button-vtvLXbiy.js";import"./ActionButton-D5nzQiKO.js";import"./Checkbox-DAr_Jmtw.js";import"./useValueChanged-JZg98mWO.js";import"./CollapsiblePanel-D67FpZL7.js";import"./MultiColumnSortDialog-DQUdkJDP.js";import"./MenuTrigger-Cbl7-Jo9.js";import"./CompositeItem-BJOfR8On.js";import"./ToolbarRootContext-b_fKtK1X.js";import"./getDisabledMountTransitionStyles-bjl4L0WK.js";import"./getPseudoElementBounds-CTbPzfBI.js";import"./chevron-down-BLDZnR1d.js";import"./index-BZfI53UY.js";import"./error-Cox_k5eE.js";import"./BaseCbacBanner-DiZjhyyT.js";import"./makeExternalStore-cqUtgK5L.js";import"./Tooltip-Pk9_o1CK.js";import"./PopoverPopup-DjTdhxTJ.js";import"./toNumber-Bl6RDY1O.js";import"./useOsdkClient-CTOSmuh9.js";import"./tick-CnI7bF9f.js";import"./DropdownField-BxjPSxoY.js";import"./withOsdkMetrics-3JkArczg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
