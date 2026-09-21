import{j as i}from"./iframe-rrq8MZm7.js";import{O as p}from"./object-table-BmLGW4nF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSRVkOuK.js";import"./preload-helper-g_e3lUw3.js";import"./Table-ykH1l2J2.js";import"./index-DgF7SkuQ.js";import"./Dialog-DYdOiXPb.js";import"./cross-Dx39xAnI.js";import"./svgIconContainer-DzRNCFzx.js";import"./useBaseUiId-Ck0oWSaP.js";import"./InternalBackdrop-wSSvokvJ.js";import"./composite-Dz23lKV_.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./index-BHKoX9xi.js";import"./useEventCallback-BHSzBPQv.js";import"./SkeletonBar-DbqU4wRS.js";import"./LoadingCell-BaeHdVOg.js";import"./ColumnConfigDialog-Cul644FJ.js";import"./DraggableList-DltL4lih.js";import"./search-HS8jOdU9.js";import"./Input-DomtRdeE.js";import"./useControlled-CFE1onYy.js";import"./Button-CR0VLtCt.js";import"./small-cross-Db8ph2CD.js";import"./ActionButton-CGA8JUAJ.js";import"./Checkbox-DhFF_qGg.js";import"./useValueChanged-ClOYFuvx.js";import"./CollapsiblePanel-Rs1qW30d.js";import"./MultiColumnSortDialog-BsojGLd-.js";import"./MenuTrigger-DXzaVxIY.js";import"./CompositeItem-CfvMX9u5.js";import"./ToolbarRootContext-BX6aviUc.js";import"./getDisabledMountTransitionStyles-DeyZi_sY.js";import"./getPseudoElementBounds-Xt__cUKT.js";import"./chevron-down-wVslH90M.js";import"./index-Bf3ZsPEb.js";import"./error-Bcjq0Lff.js";import"./BaseCbacBanner-D6iTWpAb.js";import"./makeExternalStore-Ce8SSisl.js";import"./Tooltip-CWYgwcpt.js";import"./PopoverPopup-BjrmRx1j.js";import"./debounce-Dx1hyhVT.js";import"./useOsdkClient-vYsi5oFr.js";import"./tick-DUzn1Cvr.js";import"./DropdownField-Bn4EfPzq.js";import"./isEqual-rKX8viav.js";import"./withOsdkMetrics-CkwBt4Ou.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
