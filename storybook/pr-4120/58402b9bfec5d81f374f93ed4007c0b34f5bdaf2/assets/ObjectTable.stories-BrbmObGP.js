import{j as i}from"./iframe-BNVJywF1.js";import{O as p}from"./object-table-WiUXGOvy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8n1IZTN.js";import"./preload-helper-DWuXY-GF.js";import"./Table-BJyRbGLx.js";import"./index-C4EkKaF7.js";import"./Dialog-vogIGdTb.js";import"./cross-CyiMpI_1.js";import"./svgIconContainer-BcZCykGH.js";import"./useBaseUiId-Bpu1Oowx.js";import"./InternalBackdrop-C0D2fQXF.js";import"./composite-DiO_GxNw.js";import"./index-LJRfcAtw.js";import"./index-BQqTqN1m.js";import"./index-BA6LoZ5G.js";import"./useEventCallback-CAiy3etF.js";import"./SkeletonBar-CTp2bd9M.js";import"./LoadingCell-IDNMoj92.js";import"./ColumnConfigDialog-DZO1ozRr.js";import"./DraggableList-ChmcRqcF.js";import"./search-C7WqGDQC.js";import"./Input-Da27pVQq.js";import"./useControlled-B2RztQtr.js";import"./Button-DMlU0zK6.js";import"./small-cross-Ccbug_SU.js";import"./ActionButton-C-7a2u10.js";import"./Checkbox-mEHD5Fat.js";import"./useValueChanged-Bkw0nzgB.js";import"./CollapsiblePanel-CCdfWJRe.js";import"./MultiColumnSortDialog-Dry_jIHL.js";import"./MenuTrigger-Dhu-Whey.js";import"./CompositeItem-BXGINh9c.js";import"./ToolbarRootContext-D79zfuWP.js";import"./getDisabledMountTransitionStyles-D5wjcBBn.js";import"./getPseudoElementBounds-u1YKpqoa.js";import"./chevron-down-D9ALcooV.js";import"./index-BNfW4Vjp.js";import"./error-Kq-QRHM8.js";import"./BaseCbacBanner-QanKRFIA.js";import"./makeExternalStore-DfPTVVvN.js";import"./Tooltip-Bp6EFdh0.js";import"./PopoverPopup-DaNrxJqx.js";import"./debounce-8B-CyNyC.js";import"./useOsdkClient-CyccGXDI.js";import"./tick-BeYRsnSN.js";import"./DropdownField-C8Q0gJVk.js";import"./isEqual-D_2ZUMl_.js";import"./withOsdkMetrics-BZA_bd9Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
