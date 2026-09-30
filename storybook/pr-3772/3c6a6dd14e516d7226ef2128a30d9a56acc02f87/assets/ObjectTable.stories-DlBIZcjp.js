import{j as i}from"./iframe-DejlptTF.js";import{O as p}from"./object-table-X3qHvYRl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-26X3BaJj.js";import"./preload-helper-t1ZC-fSO.js";import"./Table-D6t_1smO.js";import"./index-DeuG-BID.js";import"./Dialog-DtGIMPew.js";import"./cross-DE57w2Hx.js";import"./svgIconContainer-Bd-w9OF2.js";import"./useBaseUiId-DNOeS8k3.js";import"./InternalBackdrop-BegRmqYV.js";import"./composite-CgiNKm-K.js";import"./index-CbKeSWV-.js";import"./index-e8F5O9eW.js";import"./index-DmUvwc9j.js";import"./useEventCallback-DySuSceI.js";import"./SkeletonBar-Jnqmj5L9.js";import"./LoadingCell-BFjRur3u.js";import"./ColumnConfigDialog-CYgd3IBW.js";import"./DraggableList-C61bLq-a.js";import"./search-BB5SHFcx.js";import"./Input-BNct-weu.js";import"./useControlled-u0rXshqK.js";import"./Button-S0WXhUVU.js";import"./small-cross-BAi3Ugk-.js";import"./ActionButton-D5ovP9h8.js";import"./Checkbox-1CEuwEgy.js";import"./useValueChanged-Co9qYG2g.js";import"./CollapsiblePanel-whmM-HlO.js";import"./MultiColumnSortDialog-CQlHX6VX.js";import"./MenuTrigger-CY0lgVVo.js";import"./CompositeItem-C668gbIC.js";import"./ToolbarRootContext-hKTjuFFe.js";import"./getDisabledMountTransitionStyles-DARBSl-L.js";import"./getPseudoElementBounds-B3xcbhps.js";import"./chevron-down-R85fLGon.js";import"./index-CLFPBot-.js";import"./error-ClnW0JkG.js";import"./BaseCbacBanner-DiDBq870.js";import"./makeExternalStore-DzmCjszS.js";import"./Tooltip-D7gI9ZpI.js";import"./PopoverPopup-DUkO6HuE.js";import"./debounce-fU7KH6yO.js";import"./useOsdkClient-Be6GpiDW.js";import"./tick-CSsKr-Cj.js";import"./DropdownField-BgflIuYE.js";import"./isEqual-CStHxz3-.js";import"./withOsdkMetrics-CAm6PF-7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
