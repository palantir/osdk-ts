import{j as i}from"./iframe-DxLh3JbF.js";import{O as p}from"./object-table-CXV1HhY7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgF-PAar.js";import"./preload-helper-CtguWtZv.js";import"./Table-BlGlUSq2.js";import"./index-DKwvuwmq.js";import"./Dialog-D9QNYHK2.js";import"./cross-Bq7Vu5_q.js";import"./svgIconContainer-DVtbzSvb.js";import"./useBaseUiId-C0U6w1uv.js";import"./InternalBackdrop-CYZKR22v.js";import"./composite-BnT-JfoG.js";import"./index-lMNDx7C7.js";import"./index-CcJor5Xx.js";import"./index-JqNwC6gS.js";import"./useEventCallback-BB6FPyf8.js";import"./SkeletonBar-B3S-zvqX.js";import"./LoadingCell-VgpctpOH.js";import"./ColumnConfigDialog-Dz9ehfgV.js";import"./DraggableList-Y8hfAJUC.js";import"./search-6md9DSSP.js";import"./Input-Be22pwJh.js";import"./useControlled-CezKSMA-.js";import"./Button-DkhW4pYf.js";import"./small-cross-CmZIK1pw.js";import"./ActionButton-B_sTpPMt.js";import"./Checkbox-BSTTht3J.js";import"./useValueChanged-ZKInf5vA.js";import"./CollapsiblePanel-Bdhi8tcN.js";import"./MultiColumnSortDialog-c9m8g-xN.js";import"./MenuTrigger-B-SPPJK2.js";import"./CompositeItem-DzeDqabA.js";import"./ToolbarRootContext-BeQWjnov.js";import"./getDisabledMountTransitionStyles-CcKSQ82e.js";import"./getPseudoElementBounds-Xs14tMhu.js";import"./chevron-down-C2jGd_Ay.js";import"./index-2HlltdC-.js";import"./error-DE0gSpIQ.js";import"./BaseCbacBanner-BzPchdvo.js";import"./makeExternalStore-CIacUB7Y.js";import"./Tooltip-Cv44_0tC.js";import"./PopoverPopup-soj2Nfpm.js";import"./debounce-DMvnj4rJ.js";import"./useOsdkClient-D-0q6D8B.js";import"./tick-UzfIvE9e.js";import"./DropdownField-B27tcm_v.js";import"./isEqual-DL8SIK_A.js";import"./withOsdkMetrics-99fBVbxl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
