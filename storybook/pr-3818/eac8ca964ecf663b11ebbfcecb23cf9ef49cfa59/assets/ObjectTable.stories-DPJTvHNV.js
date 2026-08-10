import{j as i}from"./iframe-CxyWClRv.js";import{O as p}from"./object-table-DjapWFAp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-wHLkYnbi.js";import"./preload-helper-BD8IUSLW.js";import"./Table-LFRL-iJM.js";import"./index-CwkmsmKS.js";import"./Dialog-CDAWhPTY.js";import"./cross-sylIwqMp.js";import"./svgIconContainer-CfXklo5s.js";import"./useBaseUiId-jf4U9pqb.js";import"./InternalBackdrop-1JU8mXc7.js";import"./composite-BEt3pTCK.js";import"./index-B4nTVLHO.js";import"./index-CNEU6CxQ.js";import"./index-COeR_Zui.js";import"./useEventCallback-Cu9jQOIV.js";import"./SkeletonBar-jTUfV4y2.js";import"./LoadingCell-CNs-BVoo.js";import"./ColumnConfigDialog-DoMK0hYx.js";import"./DraggableList-DlXzCaYC.js";import"./search-BqpVCTT7.js";import"./Input-BOgrzWPu.js";import"./useControlled-BFAPGVYI.js";import"./isEqual-DzXVN9J1.js";import"./isObject-CjmG8_3M.js";import"./Button-DQ3MNO2y.js";import"./ActionButton-D42Xx6M4.js";import"./Checkbox-BI2toJ7y.js";import"./useValueChanged-Pbgao_0L.js";import"./CollapsiblePanel-DqJeQ-Ex.js";import"./MultiColumnSortDialog-Dzsz3GMa.js";import"./MenuTrigger-B6-3N9Zn.js";import"./CompositeItem-CgKzJJIm.js";import"./ToolbarRootContext-jpHryEcr.js";import"./getDisabledMountTransitionStyles-C6Bvh8ls.js";import"./getPseudoElementBounds-8WMM1t2O.js";import"./chevron-down-BiOQJ87i.js";import"./index-CVx7inSp.js";import"./error-CAKdt8h3.js";import"./BaseCbacBanner-65sbOJku.js";import"./makeExternalStore-Cy6TXmii.js";import"./Tooltip-BmNJMzwB.js";import"./PopoverPopup-Dn-gaywI.js";import"./toNumber-B8fujMJA.js";import"./useOsdkClient-B_sGV8aJ.js";import"./tick-Bznk9fi8.js";import"./DropdownField-C9ghg4-_.js";import"./withOsdkMetrics-DJH-BeK5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
