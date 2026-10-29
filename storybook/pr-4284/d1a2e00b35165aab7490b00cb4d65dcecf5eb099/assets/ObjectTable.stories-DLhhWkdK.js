import{j as i}from"./iframe-Cko_WFf-.js";import{O as p}from"./object-table-Ch529tBT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-EbC2n91U.js";import"./preload-helper-Cs73q2ui.js";import"./Table-IeH6N1e1.js";import"./index-2T8Wwein.js";import"./Dialog-BR6pkPqn.js";import"./cross-CBXHEXHr.js";import"./svgIconContainer-DUJTWNCq.js";import"./useBaseUiId-DydFiAor.js";import"./InternalBackdrop-Be4bBso-.js";import"./composite-BgWWCC0G.js";import"./index-C5PQsA1_.js";import"./index-Ba2bjKcU.js";import"./index-C-alEbte.js";import"./useEventCallback-F2alGF6R.js";import"./SkeletonBar-wTcJ9b1g.js";import"./LoadingCell-B8WfG5Sx.js";import"./ColumnConfigDialog-8y7Tj8ex.js";import"./DraggableList-BTP6KGBD.js";import"./search-DlsTvmsp.js";import"./Input-CP5Ce819.js";import"./useControlled-D2dKgCSU.js";import"./Button-B8X7gllj.js";import"./small-cross-CBW8u4eS.js";import"./ActionButton-C4kdXe-J.js";import"./Checkbox-D-KYaXtb.js";import"./useValueChanged-BzJUwUky.js";import"./CollapsiblePanel-CmnzNIvq.js";import"./MultiColumnSortDialog-Cd_ag-W4.js";import"./MenuTrigger-BcxS-dsu.js";import"./CompositeItem-CFHidUeB.js";import"./ToolbarRootContext-BZHxz8Zf.js";import"./getDisabledMountTransitionStyles-CO6R2Nlo.js";import"./getPseudoElementBounds-DV7dVXJb.js";import"./chevron-down-tjDGGRSV.js";import"./index-gK3sTX7L.js";import"./error-iyVGDwHQ.js";import"./BaseCbacBanner-COWJ2yUY.js";import"./makeExternalStore-CEUQtvPO.js";import"./Tooltip-BDxS5uB9.js";import"./PopoverPopup-D5S6yAxs.js";import"./debounce-JLZVI0I7.js";import"./useOsdkClient-BT_HUqnV.js";import"./tick-BFsL_7kT.js";import"./DropdownField-C0-1Vjc_.js";import"./isEqual-BVP2R1OT.js";import"./withOsdkMetrics-jyd-_lK5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
