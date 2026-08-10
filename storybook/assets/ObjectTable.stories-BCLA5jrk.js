import{j as i}from"./iframe-DOeAYoRk.js";import{O as p}from"./object-table-BMbidIlQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nAjcRiFy.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BwDvF8K8.js";import"./index-C8enkHHH.js";import"./Dialog-DT-6RsPK.js";import"./cross-CTQfiCoc.js";import"./svgIconContainer-4JA-55AY.js";import"./useBaseUiId-CqKYfNUG.js";import"./InternalBackdrop-BLrtRR73.js";import"./composite-CxfEfgAE.js";import"./index-jM1sW0ik.js";import"./index-C3Zqf3YM.js";import"./index-Ca1wRqXA.js";import"./useEventCallback-BTk3Z6Qr.js";import"./SkeletonBar-Dmjzy1lt.js";import"./LoadingCell-DYH1qbvq.js";import"./ColumnConfigDialog-B6g0duZI.js";import"./DraggableList-DrVMbYk9.js";import"./search-SpwpHeSC.js";import"./Input-oDyylqSn.js";import"./useControlled-4ALZ6JWG.js";import"./isEqual-_B9NyKT8.js";import"./isObject-BGTx8vaf.js";import"./Button-Cdun-kQv.js";import"./ActionButton-DbCm8V1N.js";import"./Checkbox-BOHdBk7N.js";import"./useValueChanged-CbWVEL48.js";import"./CollapsiblePanel-DPDp83X3.js";import"./MultiColumnSortDialog-CIChi61X.js";import"./MenuTrigger-BhWhB7VG.js";import"./CompositeItem-DpuZl7_I.js";import"./ToolbarRootContext-DZ03LuRT.js";import"./getDisabledMountTransitionStyles-DBl444QP.js";import"./getPseudoElementBounds-Bo7TLJ0Y.js";import"./chevron-down-CKxHpqTt.js";import"./index-bOvw0pIt.js";import"./error-DvFfN3ld.js";import"./BaseCbacBanner-qyS-LwHQ.js";import"./makeExternalStore-DjKzDLfr.js";import"./Tooltip-BoEvhs6Q.js";import"./PopoverPopup-C5owdlCI.js";import"./toNumber-Cs6XeUud.js";import"./useOsdkClient-Bz-qXpDK.js";import"./tick-afTKFpG8.js";import"./DropdownField-BwGsUJcf.js";import"./withOsdkMetrics-CP1ydFVJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
