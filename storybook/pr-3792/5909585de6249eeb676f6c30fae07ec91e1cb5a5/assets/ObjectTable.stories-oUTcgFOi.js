import{j as i}from"./iframe-BW5KWTVf.js";import{O as p}from"./object-table-D_xScRXe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChhpczZZ.js";import"./preload-helper-wTJCuLa0.js";import"./Table-DVjVy5zQ.js";import"./index-DZuHGaZR.js";import"./Dialog-Bcgs7q0X.js";import"./cross-B9jHlUmC.js";import"./svgIconContainer-CGH_b5cs.js";import"./useBaseUiId-djKvr1Zf.js";import"./InternalBackdrop-rE9UXK7e.js";import"./composite-DMJpidK5.js";import"./index-CBnuzy09.js";import"./index-C9GjXNGu.js";import"./index-B3_s8STg.js";import"./useEventCallback-D3_8TWDL.js";import"./SkeletonBar-Dv8azkVh.js";import"./LoadingCell-CFK-23fD.js";import"./ColumnConfigDialog-908I2WCI.js";import"./DraggableList-DdS97684.js";import"./search-BxTonfjS.js";import"./Input-Cuj41dtm.js";import"./useControlled-Bd2lsHY1.js";import"./isEqual-CBzrqXli.js";import"./isObject-UDZU_4OQ.js";import"./Button-CRYDVXLK.js";import"./ActionButton-Buo_yQHB.js";import"./Checkbox-qKxs5cs6.js";import"./useValueChanged-WJiyss_6.js";import"./CollapsiblePanel-BdO59VuU.js";import"./MultiColumnSortDialog-3Z8xlHBg.js";import"./MenuTrigger-CPeUYOFK.js";import"./CompositeItem-BgohVmvL.js";import"./ToolbarRootContext-CiyKClQw.js";import"./getDisabledMountTransitionStyles-Bs-ypZSG.js";import"./getPseudoElementBounds-CJwidu3r.js";import"./chevron-down-cYHAHA60.js";import"./index-BnK0TffT.js";import"./error-BnZI7SXP.js";import"./BaseCbacBanner-2cZzxKzO.js";import"./makeExternalStore-DRWx7nce.js";import"./Tooltip-Ds6XRiL3.js";import"./PopoverPopup-0wn3_1oJ.js";import"./toNumber-BHuF1cBP.js";import"./useOsdkClient-DbcEbBVO.js";import"./tick-G9xbPlsl.js";import"./DropdownField-D4osHb18.js";import"./withOsdkMetrics-BeUX7xJv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
