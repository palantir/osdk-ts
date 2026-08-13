import{j as i}from"./iframe-DB-361_v.js";import{O as p}from"./object-table-DygeJIg-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CzPHabeq.js";import"./preload-helper-zvjHNL09.js";import"./Table-BMddCm1U.js";import"./index-DdwLnrfs.js";import"./Dialog-C_ZEA6-F.js";import"./cross-CgBmw6jw.js";import"./svgIconContainer-tDogG8TB.js";import"./useBaseUiId-Dyby1NGR.js";import"./InternalBackdrop-DH85mJku.js";import"./composite-CEGpAhVN.js";import"./index-Bd_TtvqJ.js";import"./index-LD-tkTix.js";import"./index-BdeL7aWA.js";import"./useEventCallback-BkCnz6o6.js";import"./SkeletonBar-CNIBkP7B.js";import"./LoadingCell-BzxB7WCq.js";import"./ColumnConfigDialog-DE30qmZG.js";import"./DraggableList-UkQ3xT_w.js";import"./search-Y_2o6rdR.js";import"./Input-Du43rCnX.js";import"./useControlled-B9yE7kao.js";import"./isEqual-Dc-n6KEk.js";import"./isObject-CfOFIxrc.js";import"./Button-B9h9wyoq.js";import"./ActionButton-BLU-1Wm8.js";import"./Checkbox-Daxi2-nV.js";import"./useValueChanged-SAxhXoib.js";import"./CollapsiblePanel-Cb4bdYA2.js";import"./MultiColumnSortDialog-CtDren4G.js";import"./MenuTrigger-mj7T66LW.js";import"./CompositeItem-DCbSD_ZK.js";import"./ToolbarRootContext-DLRpCM8y.js";import"./getDisabledMountTransitionStyles-xd7EQLxb.js";import"./getPseudoElementBounds-qNjk-dq5.js";import"./chevron-down-DXD_htwf.js";import"./index-z1u9RwtB.js";import"./error-B4op4QY1.js";import"./BaseCbacBanner-Cw82aSH0.js";import"./makeExternalStore-D-AXHTbe.js";import"./Tooltip-BYVX-p84.js";import"./PopoverPopup-CdAETliG.js";import"./toNumber-D4zUsFv4.js";import"./useOsdkClient-Rh48KMqD.js";import"./tick-DIaQ-Rv8.js";import"./DropdownField-CO0ZSj3k.js";import"./withOsdkMetrics-5AfJM7Y3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
