import{j as i}from"./iframe-C5NFvgiE.js";import{O as p}from"./object-table-Cg7a57bf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLVz7dLc.js";import"./preload-helper-BC8VBrum.js";import"./Table-CqajLfYx.js";import"./index-EtmTyaay.js";import"./Dialog-9uBVf05K.js";import"./cross-DLjyYdWF.js";import"./svgIconContainer-B_PFiYn8.js";import"./useBaseUiId-CJ9Huyf7.js";import"./InternalBackdrop-D4cRPaZh.js";import"./composite-DmGpycId.js";import"./index-sVGPqYhb.js";import"./index-882meA1k.js";import"./index-DjhrnFTk.js";import"./useEventCallback-Dc5URW6d.js";import"./SkeletonBar-D__uNuhL.js";import"./LoadingCell-BCt_KtF5.js";import"./ColumnConfigDialog-DZn8srL5.js";import"./DraggableList-DuxWmrwF.js";import"./search-7RMpjv9g.js";import"./Input-DaHV-cOW.js";import"./useControlled-Duv0di0B.js";import"./isEqual-IZ72ZoN5.js";import"./isObject-9m007JNC.js";import"./Button-CQssBVED.js";import"./ActionButton-CTNaJHR0.js";import"./Checkbox-bcwpqp2K.js";import"./useValueChanged-Dc6x029G.js";import"./CollapsiblePanel-D-SkO8jl.js";import"./MultiColumnSortDialog-mSj5H4Kw.js";import"./MenuTrigger-CW5x8DBX.js";import"./CompositeItem-Cf7M82EQ.js";import"./ToolbarRootContext-By2zkM1j.js";import"./getDisabledMountTransitionStyles-D0XUgT8Q.js";import"./getPseudoElementBounds-DGNrj8Lp.js";import"./chevron-down-9I0-3TkX.js";import"./index-2E7TPCj-.js";import"./error-DAH-eKl0.js";import"./BaseCbacBanner-BKgfll48.js";import"./makeExternalStore-CqR_y6G8.js";import"./Tooltip-aBmYTUan.js";import"./PopoverPopup-BTbYxYaC.js";import"./toNumber-Dtl6tkmX.js";import"./useOsdkClient-BJfh_Cmy.js";import"./tick-BQrydFrT.js";import"./DropdownField-BhtG85if.js";import"./withOsdkMetrics-V3Vr0ZXu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
