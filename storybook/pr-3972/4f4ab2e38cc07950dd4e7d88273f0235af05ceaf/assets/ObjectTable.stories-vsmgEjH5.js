import{j as i}from"./iframe-CK77c45c.js";import{O as p}from"./object-table-CD9xgxQ4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nYdVP7HY.js";import"./preload-helper-DbNEja4W.js";import"./Table-Cv6K4vEv.js";import"./index-C442JOIH.js";import"./Dialog-BL8f_VaG.js";import"./cross-CwI5OEk2.js";import"./svgIconContainer-L_jjiIf-.js";import"./useBaseUiId-dVZqGFlU.js";import"./InternalBackdrop-C6LC9TgG.js";import"./composite-Dh-nFKNO.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./index-DlpSJTu4.js";import"./useEventCallback-ClxfXOPq.js";import"./SkeletonBar-X3eUnAaJ.js";import"./LoadingCell-BRV08XBm.js";import"./ColumnConfigDialog-Cy2f2WtW.js";import"./DraggableList-zAtO2Yt3.js";import"./search-CV_E7rKM.js";import"./Input-DeIqzZkQ.js";import"./useControlled-jnmU5UAL.js";import"./Button-CWY22zau.js";import"./small-cross-BtlEs72Q.js";import"./ActionButton-CLfSCTXA.js";import"./Checkbox-CWGtiWas.js";import"./useValueChanged-BaVslEYl.js";import"./CollapsiblePanel-BCyMY8rI.js";import"./MultiColumnSortDialog-CxJXY1yp.js";import"./MenuTrigger-GGTOeyws.js";import"./CompositeItem-CAzkW6h4.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./getDisabledMountTransitionStyles-CaJMflFk.js";import"./getPseudoElementBounds-nGyt1hPn.js";import"./chevron-down-CFkNPRkg.js";import"./index-1zjImjvm.js";import"./error-BvwPFshU.js";import"./BaseCbacBanner-DUD1Qbr1.js";import"./makeExternalStore-C2N1fTLN.js";import"./Tooltip-CY4cYmbh.js";import"./PopoverPopup-BOimy_Ld.js";import"./debounce-BKHqtWZX.js";import"./useOsdkClient-Tt2idpLi.js";import"./tick-sW9HqPYz.js";import"./DropdownField-DZE5zpKv.js";import"./isEqual-DbplaoR8.js";import"./withOsdkMetrics-7D8iT2W4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
