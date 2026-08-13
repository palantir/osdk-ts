import{j as i}from"./iframe-BjnPtOz_.js";import{O as p}from"./object-table-zIzp69cD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CdRTTSam.js";import"./preload-helper-DvpFqhNW.js";import"./Table-COsXx5hz.js";import"./index-B-VO8ckc.js";import"./Dialog-CqCeMiee.js";import"./cross-Dor8dRPD.js";import"./svgIconContainer-CMItwta7.js";import"./useBaseUiId-smhGGpwO.js";import"./InternalBackdrop-BXVLkMxu.js";import"./composite-_Pzh5Y_l.js";import"./index-CIJ2rBTU.js";import"./index-C4D01Ue3.js";import"./index-DNE-sCgP.js";import"./useEventCallback-BzItO3JI.js";import"./SkeletonBar-DwjyCsyI.js";import"./LoadingCell-Ck2EC4mw.js";import"./ColumnConfigDialog-DbHBC-09.js";import"./DraggableList-c6-ZcjMb.js";import"./search-OEEiuMQK.js";import"./Input-SUEmcWu4.js";import"./useControlled-BbAelK_j.js";import"./Button-Cxf8-3hK.js";import"./small-cross-D2oHW2nL.js";import"./ActionButton-l6-GCpK2.js";import"./Checkbox-DBdKnyBo.js";import"./useValueChanged-C5P2XyrK.js";import"./CollapsiblePanel-BjAK6Orf.js";import"./MultiColumnSortDialog-KzJc224-.js";import"./MenuTrigger-DGQUU3YK.js";import"./CompositeItem-CQIJeL3v.js";import"./ToolbarRootContext-GKohB1Vi.js";import"./getDisabledMountTransitionStyles-DumrMjAd.js";import"./getPseudoElementBounds-6oxs1p6q.js";import"./chevron-down-RU6ZJ7SE.js";import"./index-505RtiSa.js";import"./error-Df9MLz6T.js";import"./BaseCbacBanner-BXiUKVyr.js";import"./makeExternalStore-N4sJbBYc.js";import"./Tooltip-Dnqgpj59.js";import"./PopoverPopup-B20RcrSM.js";import"./toNumber-BL1xMckt.js";import"./useOsdkClient-B2zBLF21.js";import"./tick-BPQqxqWd.js";import"./DropdownField-Q5XGg2hM.js";import"./withOsdkMetrics-sn_AdfzF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
