import{j as i}from"./iframe-rp70fwwu.js";import{O as p}from"./object-table-JyO8eHyu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BT0CZarV.js";import"./preload-helper-EME5q9Jz.js";import"./Table-DREJSIaf.js";import"./index-B4gvWsM6.js";import"./Dialog-C8n9hMq-.js";import"./cross-DNFUYcP8.js";import"./svgIconContainer-CDe1DB3O.js";import"./useBaseUiId-DldllHCL.js";import"./InternalBackdrop-CB3wopGK.js";import"./composite-CuPJzJjA.js";import"./index-ChLpCK4q.js";import"./index-HM1ZzYao.js";import"./index-DcEXat2t.js";import"./useEventCallback-Z9CbEpN8.js";import"./SkeletonBar-DWB3vied.js";import"./LoadingCell-B1Kd8OIp.js";import"./ColumnConfigDialog-RzTfEw8Q.js";import"./DraggableList-CeOMgYa3.js";import"./search-BsQb9YNR.js";import"./Input-DVBMxCln.js";import"./useControlled-CHM7HnpL.js";import"./Button-iCfiBEgd.js";import"./small-cross-DQIE1Y4r.js";import"./ActionButton-rTM9eEX4.js";import"./Checkbox-AMJVntXX.js";import"./useValueChanged-B2lIX5Tz.js";import"./CollapsiblePanel-BdVNDfzn.js";import"./MultiColumnSortDialog-CIdGnCHv.js";import"./MenuTrigger-O6fRFI1R.js";import"./CompositeItem-Dn7oIdOY.js";import"./ToolbarRootContext-CoUfjY-d.js";import"./getDisabledMountTransitionStyles-DdvpbK1X.js";import"./getPseudoElementBounds-24IcT4YD.js";import"./chevron-down-Ba1aP0dz.js";import"./index-B9gm3rqX.js";import"./error-BMFKsVka.js";import"./BaseCbacBanner-Cwz1pVQs.js";import"./makeExternalStore-povODIJu.js";import"./Tooltip-CvmyFLlW.js";import"./PopoverPopup-BCC2iev1.js";import"./debounce-nCyeRLUU.js";import"./useOsdkClient-Cw47H3av.js";import"./tick-Cg7GSAs6.js";import"./DropdownField-BAITP7Mj.js";import"./isEqual-DlTS0HA0.js";import"./withOsdkMetrics-Dg07kNzb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
