import{j as i}from"./iframe-Cw_qhF0N.js";import{O as p}from"./object-table-DjPGM6wa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DAmXqyTA.js";import"./preload-helper-BOMIoqbF.js";import"./Table-DSSm1fKK.js";import"./index-TvapIid3.js";import"./Dialog-CLJKeedb.js";import"./cross-D-XWoAQF.js";import"./svgIconContainer-BTHlx_Hh.js";import"./useBaseUiId-BNu8us2u.js";import"./InternalBackdrop-DHfQ_n5T.js";import"./composite-Cn4M-AS0.js";import"./index-lqLv8je1.js";import"./index-Di-hPO50.js";import"./index-w42VGXsS.js";import"./useEventCallback-Bj9dX_fk.js";import"./SkeletonBar-CUo2yd26.js";import"./LoadingCell-gfwDxef7.js";import"./ColumnConfigDialog-BlQkjEzx.js";import"./DraggableList-Bo3Tcy6E.js";import"./search-BrIW3_zE.js";import"./Input-Bfec5TXw.js";import"./useControlled-5GWIAJrV.js";import"./isEqual-8Gu1sET9.js";import"./isObject-CJz3e4Br.js";import"./Button-rFXve3X8.js";import"./ActionButton-CrbFv_hF.js";import"./Checkbox-BOh-AO8R.js";import"./useValueChanged-ZB7hU4o5.js";import"./CollapsiblePanel-BKTgJMbu.js";import"./MultiColumnSortDialog-wT10UvvH.js";import"./MenuTrigger-DUfNfRvP.js";import"./CompositeItem-Dxc3ZApE.js";import"./ToolbarRootContext-BIaEKKO2.js";import"./getDisabledMountTransitionStyles-ByhIP2yz.js";import"./getPseudoElementBounds-DgyzHOri.js";import"./chevron-down-IhPewwA3.js";import"./index-7blLQTYn.js";import"./error-qvLsAaDE.js";import"./BaseCbacBanner-mENaFGSF.js";import"./makeExternalStore-CcclNskg.js";import"./Tooltip-XdCb1jYX.js";import"./PopoverPopup-BdOGuII2.js";import"./toNumber-DU1_CO-_.js";import"./useOsdkClient-DoF29EO5.js";import"./tick-BZ6PljLM.js";import"./DropdownField-CmpIuvUo.js";import"./withOsdkMetrics-C81Q0htC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
