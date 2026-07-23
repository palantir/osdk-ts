import{j as i}from"./iframe-Cos_ofCy.js";import{O as p}from"./object-table-Y5iUMhG7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_egHqb0.js";import"./preload-helper-CdGuEwVx.js";import"./Table-BJPnPRWS.js";import"./index-DDSQGeHq.js";import"./Dialog-BKHY_is-.js";import"./cross-Cs_o1IBr.js";import"./svgIconContainer-BOcgzqTL.js";import"./useBaseUiId-BoCR0mVM.js";import"./InternalBackdrop-a-1TUhKR.js";import"./composite-C2bzS_eC.js";import"./index-D7gjn-bC.js";import"./index-C68uuJyt.js";import"./index-6MtMpwNm.js";import"./useEventCallback-DScuBbC5.js";import"./SkeletonBar-BZb1P8Qp.js";import"./LoadingCell-C7XTpkDw.js";import"./ColumnConfigDialog-CyTLpYWA.js";import"./DraggableList-Q4D349op.js";import"./search-C9QPdOJ2.js";import"./Input-BKyhRKRB.js";import"./useControlled-CU8iec4I.js";import"./isEqual-IWZJBVF1.js";import"./isObject-C2bjSTiE.js";import"./Button-DJJJIJ8U.js";import"./ActionButton-Be-sd2GN.js";import"./Checkbox-B8AIL56G.js";import"./useValueChanged-B7ldNgfd.js";import"./CollapsiblePanel-RlQL_xjx.js";import"./MultiColumnSortDialog-CW1m32-a.js";import"./MenuTrigger-Dx9vEa8h.js";import"./CompositeItem-CfU3YuOz.js";import"./ToolbarRootContext-uScdLbZ3.js";import"./getDisabledMountTransitionStyles-DLxvAmhZ.js";import"./getPseudoElementBounds-CUu-7ttm.js";import"./chevron-down-DDQApabx.js";import"./index-Bw8KyJ0j.js";import"./error-DyQZ58wH.js";import"./BaseCbacBanner-Biu4grrU.js";import"./makeExternalStore-D4qNgwYa.js";import"./Tooltip-C1yGDdiV.js";import"./PopoverPopup-bgrrdxmZ.js";import"./toNumber-DoDd6CDz.js";import"./useOsdkClient-Df3IuLfg.js";import"./tick-DPttqPRs.js";import"./DropdownField-C6Y3ObD0.js";import"./withOsdkMetrics-0H3uZ0eq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
