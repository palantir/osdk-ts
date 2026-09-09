import{j as i}from"./iframe-BYf_OhJ0.js";import{O as p}from"./object-table-NEoJVSjw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BaE6Gf2c.js";import"./preload-helper-CMb40c8b.js";import"./Table-BNhjkCw_.js";import"./index-D24vcPYb.js";import"./Dialog-C2jKXI3g.js";import"./cross-937OAABn.js";import"./svgIconContainer-CLNhy3XP.js";import"./useBaseUiId-BV6TRjLb.js";import"./InternalBackdrop-C9IU7SA-.js";import"./composite-Czk5304D.js";import"./index-Cfn6IIi-.js";import"./index-C0REXx9G.js";import"./index-BUkZX9cq.js";import"./useEventCallback-B4MxpH1S.js";import"./SkeletonBar-hbjfgvT2.js";import"./LoadingCell-BSv2ov2l.js";import"./ColumnConfigDialog-JMRVff0D.js";import"./DraggableList-Dw0_e9Nv.js";import"./search-CG-g63hT.js";import"./Input-jGJDNg7d.js";import"./useControlled-D82M4IV8.js";import"./Button-HH_9r5OW.js";import"./small-cross-DiOHh5rF.js";import"./ActionButton-Deb6A0x0.js";import"./Checkbox-B8FrTbPR.js";import"./useValueChanged-D_qKRuH6.js";import"./CollapsiblePanel-BS-j2JIg.js";import"./MultiColumnSortDialog-CteiIVyV.js";import"./MenuTrigger-Bv0LSSPW.js";import"./CompositeItem-CptL6v0D.js";import"./ToolbarRootContext-U6rUTj3k.js";import"./getDisabledMountTransitionStyles-Dbvx_1LF.js";import"./getPseudoElementBounds-DTEyIocp.js";import"./chevron-down-BFyWQHOE.js";import"./index-DGCG5Etv.js";import"./error-IoYBerAI.js";import"./BaseCbacBanner-DBesyPHX.js";import"./makeExternalStore-xpSL_Msm.js";import"./Tooltip-C2Ov1JFy.js";import"./PopoverPopup-DKUxgHWp.js";import"./debounce-Cx3iNRX1.js";import"./useOsdkClient-BLIl6zwO.js";import"./tick-C0Y_aYcJ.js";import"./DropdownField-CKAAt-ca.js";import"./isEqual-BoWnJhtt.js";import"./withOsdkMetrics-D932jFv2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
